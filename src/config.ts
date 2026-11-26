/**
 * All site content and settings live here.
 * Edit this file to retheme the whole site: no component changes needed.
 * Leave `bundles.items` empty (or remove `bundles`) to hide that block.
 */

export interface Img {
  src: string; // path under /public
  alt: string; // use "" for purely decorative images
}

export interface Link {
  label: string;
  href: string;
}

export const site = {
  lang: "ja",
  title: "Primer",
  tagline: "つくりながら学ぶ",
  description:
    "学習教材・講座・デジタル商品の紹介に使えるAstro用ワンページテーマ。",
  logo: "Primer",
  ogImage: "/images/hero.jpg",
};

/** Colors and font. Injected as CSS variables; override any of them. */
export const theme = {
  primary: "#a5003f",
  accent: "#ef377d",
  text: "#333333",
  surface: "#f7f7f7",
  fontFamily:
    '"Yu Gothic", "YuGothic", "Hiragino Sans", "Noto Sans JP", system-ui, -apple-system, "Segoe UI", sans-serif',
};

/** Full-screen menu. `href` values should match section ids below. */
export const nav: Link[] = [
  { label: "サンプルについて", href: "#about" },
  { label: "サンプルの強み", href: "#strengths" },
  { label: "教材一覧", href: "#list" },
  { label: "はじめてみる", href: "#cta" },
];

export const hero = {
  title: "はじめの一歩を、わかりやすい教材で。",
  lead: "つまずきやすい部分を丁寧に解説した、実践的な学習教材をそろえています。",
  cta: { label: "教材を見る", href: "#list" } as Link,
  image: { src: "/images/hero.jpg", alt: "" } as Img,
};

export const about = {
  id: "about",
  title: "サンプルについて",
  paragraphs: [
    "ここにはサービスや教材の紹介文が入ります。誰に向けたものか、どんな課題を解決するのかを、数行でまとめましょう。",
    "練習問題だけで終わらず、最後までつくり上げることで、成果物として残る内容を目指しています。",
    "新しい教材は随時追加していく予定です。この文章は、ご自身の紹介文に差し替えてお使いください。",
  ],
  image: { src: "/images/about.png", alt: "" } as Img,
};

export const strengths = {
  id: "strengths",
  title: "サンプルの強み",
  items: [
    {
      title: "豊富なコンテンツ",
      text: "解説・テンプレート・実例を多数掲載しています。",
    },
    {
      title: "手に取りやすい価格",
      text: "無料で試して、必要なものだけ購入できます。",
    },
    {
      title: "自分で調べて解決する力",
      text: "手順をなぞるだけでなく、答えの探し方が身につきます。",
    },
  ],
};

export const list = {
  id: "list",
  title: "教材一覧",
  items: [
    {
      title: "実践教材 第1弾",
      description:
        "全5ページのサイトを、最初から最後まで作ります。前半は無料なので、購入前にお試しいただけます。",
      image: { src: "/images/item-1.svg", alt: "" },
      price: "無料",
      href: "#",
    },
    {
      title: "実践教材 第2弾",
      description:
        "第1弾の内容をふまえて、レスポンシブ対応とモダンなデザインに挑戦します。",
      image: { src: "/images/item-2.svg", alt: "" },
      price: "1,200円",
      href: "#",
    },
    {
      title: "学習ロードマップ",
      description:
        "初心者から最初の仕事までの道筋と、途中で役立つツールをまとめました。",
      image: { src: "/images/item-3.svg", alt: "" },
      price: "3,000円",
      href: "#",
    },
    {
      title: "デザインカンプ 初級編",
      description:
        "実際の案件に近い形式のデザインデータから制作します。元データ付きです。",
      image: { src: "/images/item-4.svg", alt: "" },
      price: "1,500円",
      href: "#",
    },
    {
      title: "デザインカンプ 中級編",
      description:
        "公開して使えるポートフォリオサイトを、デザインデータから作ります。",
      image: { src: "/images/item-5.svg", alt: "" },
      price: "2,000円",
      href: "#",
    },
    {
      title: "デザインカンプ 上級編",
      description: "実務に近い課題で、ポートフォリオの強い一品になる内容です。",
      image: { src: "/images/item-6.svg", alt: "" },
      price: "2,500円",
      href: "#",
    },
  ],
  note: "※ほかにも無料の教材を随時公開しています。",
  bundles: {
    title: "お得なセット",
    items: [
      {
        title: "実践教材セット",
        description:
          "第1弾と第2弾をまとめたセットです。個別に買うより500円お得です。",
        image: { src: "/images/bundle-1.svg", alt: "" },
        href: "#",
      },
      {
        title: "スターターパック",
        description:
          "ロードマップと実践教材2冊を、よりお求めやすい価格でまとめました。",
        image: { src: "/images/bundle-2.svg", alt: "" },
        href: "#",
      },
      {
        title: "ブースターパック",
        description:
          "スターターパックの内容に、デザインカンプまで含めた全部入りです。",
        image: { src: "/images/bundle-3.svg", alt: "" },
        href: "#",
      },
      {
        title: "デザインカンプセット",
        description: "デザインカンプ3種を、元データ付きで割引価格にしました。",
        image: { src: "/images/bundle-4.svg", alt: "" },
        href: "#",
      },
    ],
  },
};

export const cta = {
  id: "cta",
  title: "まずは無料の教材から",
  text: "会員登録は不要です。最初の部分を読んでから、続けるかどうかを決められます。",
  button: { label: "教材を見る", href: "#list" } as Link,
};

export const footer = {
  text: `© Primer. All rights reserved.`,
};
