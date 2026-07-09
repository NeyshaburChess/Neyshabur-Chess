import Image from "next/image";
 
const books = [
  {
    title: "کتاب آموزش شطرنج مقدماتی",
    author: "هیأت شطرنج شهرستان نیشابور",
    description:
      "مناسب برای علاقه‌مندانی که قصد دارند شطرنج را از پایه و به صورت اصولی یاد بگیرند.",
    image: "/books/book1.jpg",
    pdf: "/books/book1.pdf",
  },
  {
    title: "اصول تاکتیک در شطرنج",
    author: "هیأت شطرنج شهرستان نیشابور",
    description:
      "آشنایی با مهم‌ترین تاکتیک‌های شطرنج همراه با مثال‌های آموزشی.",
    image: "/books/book2.jpg",
    pdf: "/books/book2.pdf",
  },
];
 
export default function BooksPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#001F3F",
          marginBottom: "10px",
        }}
      >
        📚 کتاب‌های آموزشی
      </h1>
 
      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "40px",
        }}
      >
        مجموعه‌ای از کتاب‌های آموزشی شطرنج برای تمامی سطوح.
      </p>
 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {books.map((book) => (
          <div
            key={book.title}
            style={{
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,.12)",
            }}
          >
            <Image
              src={book.image}
              alt={book.title}
              width={500}
              height={300}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />
 
            <div style={{ padding: "20px" }}>
              <h2
                style={{
                  color: "#001F3F",
                  marginBottom: "10px",
                }}
              >
                {book.title}
              </h2>
 
              <p
                style={{
                  color: "#777",
                  marginBottom: "10px",
                }}
              >
                نویسنده: {book.author}
              </p>
 
              <p
                style={{
                  color: "#555",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                }}
              >
                {book.description}
              </p>
 
              <a
                href={book.pdf}
                target="_blank"
                style={{
                  display: "inline-block",
                  background: "#001F3F",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                📥 دانلود کتاب
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


