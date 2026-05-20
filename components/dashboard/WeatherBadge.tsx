type WeatherBadgeProps = {
  icon: string;
  text: string;
};

export function WeatherBadge({ icon, text }: WeatherBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md bg-sky-100 px-3 py-2 text-sm font-medium text-sky-900">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}
