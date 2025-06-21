import localFont from 'next/font/local';

export const bricolageGrotesque = localFont({
  src: [
    {
      path: './fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-bricolage-grotesque',
});
