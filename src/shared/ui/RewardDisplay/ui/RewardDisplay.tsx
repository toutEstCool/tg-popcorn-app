interface IRewardDisplayProps {
  className?: string;
  reward: number;
}

export const RewardDisplay = ({ className, reward }: IRewardDisplayProps) => {
  const formattedReward = reward.toLocaleString("ru-RU");

  return <span className={className}>{formattedReward}</span>;
};
