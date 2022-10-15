//ローディング画面のコンポーネント
//reactのライブラリであるreact-loader-spinnerを使うことでローディング画面を実現
//https://qiita.com/baby-degu/items/e183b20dd20b20920e00 参考サイト
//インポートの仕方が現在では違うので公式ドキュメントをしっかりと確認すること!!!
import { Audio } from 'react-loader-spinner';

const Loading = () => {
  return (
    <Audio
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  )
}

export default Loading;
