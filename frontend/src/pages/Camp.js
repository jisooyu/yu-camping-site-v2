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
      <li>캠프장: {campName}</li>
      <li>캠프장 종류: {camptype}</li>
      <li>
        <a href={reservation}>예약 샤이트</a>
      </li>
      <li>소개: {description}</li>

      <li>
        <a href={homePageUrl}>Home Page</a>
      </li>
      <li>
        <a href={imageUrl}>캠핑장 사진</a>
      </li>
    </>
  );
};

export default Camp;
