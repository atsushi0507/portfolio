const TermsOfServices = () => {
    return (
      <main className="pt-24 max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-8 border-b-4 border-blue-500 inline-block">
          利用規約
        </h1>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. はじめに</h2>
          <p className="text-base leading-relaxed">
            この利用規約（以下「本規約」といいます。）は、当サイトの利用条件を定めるものです。本サイトを利用することで、本規約に同意したものとみなされます。
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. 禁止事項</h2>
          <p className="text-base leading-relaxed mb-2">
            当サイトの利用にあたり、以下の行為を禁止します：
          </p>
          <ul className="list-disc list-inside pl-4 text-base leading-relaxed space-y-1">
            <li>法令または公序良俗に反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当サイトの運営を妨害する行為</li>
            <li>他のユーザーの個人情報を不正に取得する行為</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. 免責事項</h2>
          <p className="text-base leading-relaxed">
            当サイトのコンテンツや情報について、その正確性や完全性を保証するものではありません。当サイトの利用により生じた損害について、当サイトは一切責任を負いません。
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. 規約の変更</h2>
          <p className="text-base leading-relaxed">
            本規約は、必要に応じて変更することがあります。変更後の規約は、当サイトに掲載された時点で有効となります。
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">5. お問い合わせ</h2>
          <p className="text-base leading-relaxed">
            本規約に関するお問い合わせは、コンタクトフォームからご連絡ください。
          </p>
        </section>
      </main>
    );
  };
  
  export default TermsOfServices;
  