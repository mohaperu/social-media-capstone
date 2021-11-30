

export function AddAccount() {
  const media = [
    {
      name: 'facebook',
      site: "https://www.facebook.com",
      color: "rgba(0, 0, 255, 0.726)"
    },
    {
      name: 'instagram',
      site: "https://www.instagram.com",
      color: "#F23960"
    },
    {
      name: 'twitter',
      site: "https://www.twitter.com",
      color: "#1DA1F2"
    },
    {
      name: 'linkedin',
      site: "https://www.linkedin.com",
      color: "#0e76a8"
    },
    {
      name: 'reddit',
      site: "https://www.reddit.com",
      color: "#ff4500"
    },
    {
      name: 'pinterest',
      site: "https://www.pinterest.com",
      color: "#E60023"
    },
  ];
  return (
    <div className="accounts">
      <h1>Accounts</h1>
      <div className="flex">
        {media.map((data, index) => <a href={data.site} target="_blank" rel="noreferrer">
          <div className="box">
            <box-icon key={index} name={data.name} type='logo' size="lg" color={data.color}></box-icon>
          </div>
        </a>
        )}
      </div>
    </div>
  );
}
