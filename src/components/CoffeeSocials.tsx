export const CoffeeSocials = () => (
  <section className="text-center flex flex-col gap-3 h-26">
    <h3 className="text-2xl font-bold">Connect with us</h3>

    <div className="flex justify-center gap-6 text-neutral-400">
      <SocialLink
        href="https://www.instagram.com/"
        label="Instagram"
        tooltip="@Brew.Master"
      />

      <SocialLink
        href="https://x.com/"
        label="Twitter"
        tooltip="@Brew_Master"
      />

      <SocialLink
        href="https://github.com/matiashernandezkopi"
        label="GitHub"
        tooltip="/matiashernandezkopi"
      />

      <SocialLink
        href="mailto:matiashernandez7200@gmail.com"
        label="Email"
        tooltip="matiashernandez7200@gmail.com"
      />
    </div>
  </section>
);

const SocialLink = ({
  href,
  label,
  tooltip,
}: {
  href: string;
  label: string;
  tooltip: string;
}) => (
  <a
    href={href}
    className="relative group hover:text-coffee transition-colors"
    target={href.startsWith('http') ? '_blank' : undefined}
    rel="noopener noreferrer"
  >
    {label}

    {/* Tooltip */}
    <span className="
      pointer-events-none
      absolute -top-9 left-1/2 -translate-x-1/2
      whitespace-nowrap
      rounded-md bg-coffee px-2 py-1 text-white
      opacity-0 group-hover:opacity-100
      transition-opacity duration-200 text-xl
    ">
      {tooltip}
    </span>
  </a>
);
