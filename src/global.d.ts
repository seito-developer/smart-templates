// global.d.ts など、プロジェクト内のどこかで
import 'react';

declare module 'react' {
  // 既存のHTMLAttributesにinert属性を追加する
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    inert?: boolean;
  }
}
