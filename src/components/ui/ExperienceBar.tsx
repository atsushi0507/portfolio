interface ExperienceBarProps {
    years: number;
}

export const ExperienceBar = ({years}: ExperienceBarProps) => {
    const widthPercent = years >= 10 ? 100 : (years / 10) * 100
    return (
      <div className="w-full bg-gray-300 rounded overflow-hidden h-5 relative">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
          style={{ width: `${widthPercent}%` }}
        ></div>
      </div>
    )
}