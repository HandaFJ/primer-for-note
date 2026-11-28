# Primer: 教材・デジタル商品向け Astro テーマ

Astro 7 のみで作られた1ページ構成のテーマです（UIフレームワーク・CSSライブラリ不使用）。

同梱のサンプルコンテンツは日本語（`lang: 'ja'`）です。`src/config.ts` のテキストを書き換えることで、どの言語でも利用できます。

構成セクション：**Hero → About → Strengths → List（バンドル表示対応） → CTA**

## 主な機能
- テキスト、リンク、画像、メニュー項目、カラーを `src/config.ts` の1ファイルに集約
- CSSベースのフルスクリーンメニュー（リンククリックと Escape キーで閉じる最小限のJSのみ）
- レスポンシブ対応、キーボード操作対応、スキップリンク、フォーカス表示、`prefers-reduced-motion` 対応
- 基本的なSEO設定（title、description、canonical、Open Graph / Twitter タグ）
- `base` 設定によるサブパス配信に対応（GitHub Pages のプロジェクトサイトなど）
- 素のCSSデザイントークン（`--color-primary`、`--color-accent` など）

## 動作要件
Node.js 22.23.4 以上

## クイックスタート
```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview  # ビルド済みサイトをローカル配信
```
> ビルド後のサイトは `dist/index.html` をダブルクリックして開かず、`npm run preview` で確認してください。
> ビルド成果物はルート相対パスを使うため、Webサーバー経由での配信が必要です。

## デプロイ
### GitHub Pages
1. デフォルトブランチが `main` のリポジトリにプッシュします。
2. **Settings → Pages** で **Source** を **GitHub Actions** に設定します。
3. プッシュすると、`.github/workflows/deploy.yml` がビルドと公開を実行します。

GitHub Actions では、`site` と `base` はリポジトリ情報（`https://<owner>.github.io/<repo>/`）から自動設定されます。ユーザーサイト（`<owner>.github.io`）や独自ドメインを使う場合は、ワークフローの環境変数 `BASE` / `SITE` を設定するか、`astro.config.mjs` を編集してください。

### その他のホスティング先（Netlify、Cloudflare Pages、Vercel など）
ビルドコマンドは `npm run build`、出力ディレクトリは `dist` です。本番URLに合わせて `astro.config.mjs` の `site` を設定してください。

## カスタマイズ
| 対象 | 編集場所 |
| --- | --- |
| サイト名、言語、説明文 | `src/config.ts` の `site` |
| カラーとフォント | `src/config.ts` の `theme` |
| メニュー | `src/config.ts` の `nav`（`href` を各セクションIDに合わせる） |
| 各セクションの内容 | `src/config.ts` の `hero`、`about`、`strengths`、`list`、`cta` |
| バンドルの非表示 | `list.bundles.items` を `[]` に設定 |
| 画像 | `public/images/` のファイルを差し替え |
| レイアウトとスタイル | `src/styles/global.css`、`src/styles/menu.css` |

`config.ts` 内の画像パスは `/` から始め、`src/utils/url.ts` によって `base` に解決されるため、この記法を維持してください。

## ディレクトリ構成
```
.github/workflows/deploy.yml   # GitHub Pages デプロイ設定
src/
├─ config.ts                   # コンテンツと設定の一元管理
├─ layouts/BaseLayout.astro
├─ components/                 # Header, Hero, About, Strengths, ItemList, Cta, Footer
├─ pages/index.astro
├─ styles/                     # global.css, menu.css
└─ utils/url.ts                # base考慮のURLヘルパー
public/images/                 # プレースホルダー用SVG
```

## ライセンス
MIT
