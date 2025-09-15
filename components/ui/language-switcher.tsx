"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition, Suspense } from "react";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";

type Props = {
  className?: string;
};

function LanguageSwitcherCore({ className }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const baseLocale = typeof locale === "string" ? locale.split("-")[0] : locale;

  const languages = [
    { code: "en", name: "ENG", flag: "🇺🇸" },
    { code: "id", name: "IDN", flag: "🇮🇩" },
  ];

  function onSelectChange(nextLocale: string) {
    if (nextLocale === baseLocale) return;

    const segments = (pathname ?? "/").split("/");
    segments[1] = nextLocale;
    const nextPath = segments.join("/");

    const paramsString = searchParams ? searchParams.toString() : "";
    const finalPath = paramsString ? `${nextPath}?${paramsString}` : nextPath;

    startTransition(() => {
      router.replace(finalPath);
      router.refresh();
    });
  }

  const currentFlag =
    languages.find((lang) => lang.code === baseLocale)?.flag ?? "🌐";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className={className}
          disabled={isPending}
        >
          <Globe className='h-4 w-4 mr-2' />
          {currentFlag}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => onSelectChange(language.code)}
            className='cursor-pointer'
            disabled={isPending || baseLocale === language.code}
          >
            <span className='mr-2'>{language.flag}</span>
            {language.name}
            {baseLocale === language.code && (
              <span className='ml-auto text-xs text-muted-foreground'>✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function LanguageSwitcherFallback({ className }: Props) {
  return (
    <Button variant='outline' size='sm' className={className} disabled>
      <Globe className='h-4 w-4 mr-2' />
      🌐
    </Button>
  );
}

export default function LanguageSwitcher({ className }: Props) {
  return (
    <Suspense fallback={<LanguageSwitcherFallback className={className} />}>
      <LanguageSwitcherCore className={className} />
    </Suspense>
  );
}
