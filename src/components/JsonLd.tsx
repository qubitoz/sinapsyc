export default function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // JSON-LD is safe to inline; values come from our own trusted data.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
