import { CardType } from "@/types/card";

export const AppItems: CardType[] = [
    {
        mainImage: 'https://unsplash.it/200/200',
        title: 'LLMトラベル',
        description: '目的地に応じた旅行プランを提案します。Chat-GPT を活用した旅程提案を体験してみてください！※現在はデモンストレート版のため一部機能に正確性を欠くことがあります。',
        link: 'https://multiagent-demo-llm-travel.streamlit.app',
    },
    {
        mainImage: 'https://unsplash.it/200/201',
        title: 'Health Hive',
        description:
          'あなたの健康を管理します。あなたにフィットした献立、運動メニューの提案を通じて、無理なく理想のボディーを手に入れましょう！',
        link: 'https://healthhive.streamlit.app',
    },
    {
        mainImage: 'https://unsplash.it/200/202',
        title: 'DeepDigits – 書いて試せるAI数字認識',
        description: '書いた数字をAIが即判定！3つのモデルによる予測結果と、それぞれの判定確率の違いも体験できます。AIの“迷い”まで見える、直感的な認識デモ。',
        link: 'https://cnndemo-handwritten-number.streamlit.app',
    },
    {
        mainImage: 'https://storage.googleapis.com/portfolio-site-blog-images/bitcoin.png',
        title: 'Bitcoin DAQ',
        description: 'bitFlyerのビットコイン-日本円の1分足価格データ収集システムと価格データの可視化アプリ',
        link: 'https://bitcoin-daq-visualization.streamlit.app',
    }
];