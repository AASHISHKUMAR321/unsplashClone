// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Photos } from "./Photos";

// import { createApi } from "unsplash-js";
// import Imgix from "react-imgix";

// const HomeDiv = styled.div`
//   /* display: grid; */
//   /* overflow: hidden;
//   width: 95%;

//   grid-template-columns: repeat(3, 1fr);
//   justify-content: center;
//   gap: 10px;
//   margin: auto;
//   margin-top: 20px;
//   img {
//     src: "";
//   }
//   @media only screen and (min-width: 0px) and (max-width: 375px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
//   @media only screen and (min-width: 375px) and (max-width: 768px) {
//     grid-template-columns: repeat(1, 1fr);
//   } */
// `;

// const api = createApi({
//   accessKey: "",
//   //   accessKey: "0Fa3JE_EtqTVBtB7ZwMDYOuwjfJkDhykXtEfXk_oNAA",
// });

// export const Home = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     api.search
//       .getPhotos({ query: "laptop" })
//       .then((result) => {
//         setData(result);
//       })
//       .catch(() => {
//         console.log("something went wrong!");
//       });
//   }, []);

//   //   localStorage.setItem("arr", JSON.stringify(data));
//   let arr = JSON.parse(localStorage.getItem("arr"));
//   console.log(arr);
//   //   if (data === null) {
//   //     return <div>Loading...</div>;
//   //   } else if (data.errors) {
//   //     return (
//   //       <div>
//   //         <div>{data.errors[0]}</div>
//   //         <div>PS: Make sure to set your access token!</div>
//   //       </div>
//   //     );
//   //   } else {

//   return (
//     <HomeDiv>
//       {arr.response.results.map((photo) => (
//         <img alt="" src={photo.urls.small} />
//         // <Imgix
//         //   sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
//         //   src={photo.urls.raw}
//         //   key={photo.urls.raw}
//         //   imgixParams={{
//         //     fit: "crop",
//         //     fm: "jpg",
//         //   }}
//         //   width="500"
//         //   height="500"
//         // />
//       ))}
//     </HomeDiv>
//   );
//   //   }
// };
