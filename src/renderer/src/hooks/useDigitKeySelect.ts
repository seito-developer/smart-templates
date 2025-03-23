import { useEffect, useState } from 'react';

/**
 * 数字キーを押したら、その番号の選択肢を選択状態にするカスタムフック
 * @param options 選択肢の配列（例: ["Option1", "Option2", ...]）
 * @param onSelect (selectedValue, selectedIndex) => void
 *        選択肢が変更されたときに呼ばれるコールバック
 * @returns [selectedIndex, setSelectedIndex]
 *          現在選択中のインデックスと、それを更新する関数
 */
export function useDigitKeySelect<T>(
  options: T[],
  onSelect: (value: T, index: number) => void,
  initialIndex: number = 0
): [number, (idx: number) => void] {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const digit = parseInt(e.key, 10); // "1"→1, "2"→2, ...
      if (!isNaN(digit)) {
        const targetIndex = digit - 1; // 1→index=0, 2→index=1, ...
        if (targetIndex >= 0 && targetIndex < options.length) {
          setSelectedIndex(targetIndex);
          onSelect(options[targetIndex], targetIndex);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [options, onSelect]);

  // マニュアルに選択肢を切り替えるための関数
  const manuallySetIndex = (idx: number) => {
    setSelectedIndex(idx);
    onSelect(options[idx], idx);
  };

  return [selectedIndex, manuallySetIndex];
}
