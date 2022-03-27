const Camp = ({
  campName,
  camptype,
  reservation,
  description,
  homePageUrl,
  imageUrl,
  status,
}) => {
  return (
    <>
      <ul>
        <div>캠프장: {campName}</div>
        <div>캠프장 종류: {camptype}</div>
        <li>
          <a href={reservation}>예약 샤이트</a>
        </li>
        <div>소개: {description}</div>

        <li>
          <a href={homePageUrl}>Home Page</a>
        </li>
        <li>
          <a href={imageUrl}>캠핑장 사진</a>
        </li>
      </ul>
    </>
  );
};

export default Camp;
