type WeatherBadgeProps = {
  icon: string;
  text: string;
};

export function WeatherBadge({ icon, text }: WeatherBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-md bg-sky-100 px-2 py-1 text-xs font-medium text-sky-900">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}
