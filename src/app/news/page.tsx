export default function NewsPage() {
  const news = [
    {
      title: "کسب مقام سوم کشوری توسط ثنا شادان‌پور",
      description:
        "ثنا شادان‌پور، شطرنج‌باز شایسته نیشابور، موفق به کسب مقام سوم مسابقات کشوری شد.",
    },
    {
      title: "برگزاری مسابقه هفتگی شطرنج در باغ ملی",
      description:
        "در راستای توسعه و ترویج شطرنج، مسابقات هفتگی شطرنج با حضور علاقه‌مندان این رشته در باغ ملی برگزار شد.",
    },
    {
      title: "برگزاری مسابقه شطرنج در روز بزرگداشت خیام",
      description:
        "به مناسبت روز بزرگداشت حکیم عمر خیام، مسابقه شطرنج در آرامگاه خیام نیشابور برگزار شد.",
    },
    {
      title: "برگزاری مسابقه ویژه بانوان در پارک بانوان",
      description:
        "مسابقه شطرنج ویژه بانوان با هدف حمایت از حضور فعال بانوان در این رشته ورزشی در پارک بانوان برگزار شد.",
    },
  ];
 
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>اخبار هیأت شطرنج شهرستان نیشابور</h1>
 
      {news.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </main>
  );
}