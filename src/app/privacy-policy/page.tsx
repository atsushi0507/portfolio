const PrivacyPolicy = () => {
  return (
    <main className="pt-24 max-w-3xl mx-auto px-4 py-12 text-gray-800">

    <h1 className="text-3xl font-bold mb-8 text-center">
        プライバシーポリシー
    </h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">1. 個人情報の収集</h2>
        <p className="text-base leading-relaxed">
          当サイトでは、お問い合わせフォームの送信時に、名前、メールアドレスなどの個人情報を収集することがあります。これらの情報は、お問い合わせへの対応やサービスの提供に使用されます。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">2. 個人情報の利用目的</h2>
        <p className="text-base leading-relaxed mb-2">収集した個人情報は、以下の目的で利用されます。</p>
        <ul className="list-disc list-inside text-base leading-relaxed">
          <li>お問い合わせ対応</li>
          <li>サービスの提供・改善</li>
          <li>新サービスのお知らせ</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">3. 個人情報の第三者提供</h2>
        <p className="text-base leading-relaxed">
          当サイトでは、法令に基づく場合を除き、個人情報を第三者に提供することはありません。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">4. 個人情報の管理</h2>
        <p className="text-base leading-relaxed">
          個人情報の漏洩、紛失、毀損を防止するために、適切な安全対策を実施しています。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">5. プライバシーポリシーの変更</h2>
        <p className="text-base leading-relaxed">
          本プライバシーポリシーは、必要に応じて変更されることがあります。変更後のポリシーは、当サイトに掲載された時点で有効となります。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">6. お問い合わせ</h2>
        <p className="text-base leading-relaxed">
          プライバシーポリシーに関するお問い合わせは、コンタクトフォームよりお願いします。
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
