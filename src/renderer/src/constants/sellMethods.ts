export enum SellMethodEnum {
  UNSPECIFIED = 0,
  REGULAR = 1, // 通常販売商品
  LOTTERY = 2, // 抽選販売商品
  DIRECT = 3, // 直接付与
  INDIRECT = 4, // 関節付与
  STEP_LOTTERY = 5, // 段階的抽選販売商品
  AUCTION = 6, // オークション
  FREE = 7, // 無料配布
  CONDITIONAL = 8 // 条件付与
}

export const SELL_METHOD = {
  UNSPECIFIED: {
    name: 'unspecified',
    value: 0,
    label: '未指定'
  },
  REGULAR: {
    name: 'regular',
    value: 1,
    label: '通常販売商品'
  },
  LOTTERY: {
    name: 'lottery',
    value: 2,
    label: '抽選販売商品'
  },
  DIRECT: {
    name: 'direct',
    value: 3,
    label: '直接付与'
  },
  INDIRECT: {
    name: 'indirect',
    value: 4,
    label: '関節付与'
  },
  STEP_LOTTERY: {
    name: 'step_lottery',
    value: 5,
    label: '段階的抽選販売商品'
  },
  AUCTION: {
    name: 'auction',
    value: 6,
    label: 'オークション'
  },
  FREE: {
    name: 'free',
    value: 7,
    label: '無料配布'
  },
  CONDITIONAL: {
    name: 'conditional',
    value: 8,
    label: '条件付与'
  }
}