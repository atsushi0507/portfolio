import { AppData } from "@/types/app";

// export const AppItems: CardType[] = [
export const AppItems: AppData[] = [
    {
        mainImage: 'https://storage.googleapis.com/portfolio-site-blog-images/llm_travel_mainImage.png',
        title: 'LLMトラベル',
        description: '目的地に応じた旅行プランを提案します。Chat-GPT を活用した旅程提案を体験してみてください！※現在はデモンストレート版のため一部機能に正確性を欠くことがあります。',
        link: 'https://multiagent-demo-llm-travel.streamlit.app',
        techStack: ["Chat-GPT", "LangGraph", "Streamlit"]
    },
    {
        mainImage: 'https://storage.googleapis.com/portfolio-site-blog-images/health_hive_image.png',
        title: 'Health Hive',
        description:
          'あなたの健康を管理します。あなたにフィットした献立、運動メニューの提案を通じて、無理なく理想のボディーを手に入れましょう！',
        link: 'https://healthhive.streamlit.app',
        techStack: ["Chat-GPT", "Streamlit", "BigQuery", "Firestore", "Plotly"]
    },
    {
        mainImage: 'https://storage.googleapis.com/portfolio-site-blog-images/cnn_image.png',
        title: 'DeepDigits – 書いて試せるAI数字認識',
        description: '書いた数字をAIが即判定！3つのモデルによる予測結果と、それぞれの判定確率の違いも体験できます。AIの“迷い”まで見える、直感的な認識デモ。',
        link: 'https://cnndemo-handwritten-number.streamlit.app',
        techStack: ["Tensorflow", "OpenCV", "Streamlit"]
    },
    {
        mainImage: 'https://storage.googleapis.com/portfolio-site-blog-images/bitcoin.png',
        title: 'Bitcoin DAQ',
        description: 'bitFlyerのビットコイン-日本円の1分足価格データ収集システムと価格データの可視化アプリ',
        link: 'https://bitcoin-daq-visualization.streamlit.app',
        techStack: ["BigQuey", "Streamlit", "CryptoCompare"]
    }
];