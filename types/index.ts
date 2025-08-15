export type ListItem = {
  id: string;
  name: string;
  qty?: string;
  note?: string;
  purchased?: boolean;
  updatedAt: string;
};

export type MarketList = {
  id: string;
  title: string;
  items: ListItem[];
  ownerId?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
  version?: number;
};

export type MarketRun = MarketList;

export type ScreenHeaderProps = {
  title: string;
}

export type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
};