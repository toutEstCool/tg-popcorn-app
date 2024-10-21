interface IRewardDisplayProps {
  className?: string;
  reward: number;
}

export const RewardDisplay = ({ className, reward }: IRewardDisplayProps) => {
  const formattedReward = `${reward.toLocaleString("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`.replace(",", ".");

  return <span className={className}>{formattedReward}</span>;
};
