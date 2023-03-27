import styled from "styled-components";

export const PlaceItemContainer = styled.li`
 margin: 1rem 0;
  padding: 0;
 `;
export const PlaceItemImage = styled.div`
  width: 100%;
  height: 12.5rem;
  margin-right: 1.5rem;

  @media (min-width: 768px) {
    height: 20rem;
}
  `;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  `;
export const PlaceItemInfo = styled.div`
padding: 1rem;
  text-align: center;
  `;
export const PlaceItemTitle = styled.h2`
 margin: 0 0 0.5rem 0;
 `;
export const PlaceItemAddress = styled.h3`
 margin: 0 0 0.5rem 0;`;
export const PlaceItemDescription = styled.p`
 margin: 0 0 0.5rem 0;
 `;
export const PlaceItemActions = styled.div`
padding: 1rem;
  text-align: center;
  border-top: 1px solid #ccc;

   & a{
    margin: 0.5rem;
   }
  `;
export const Button = styled.button`
 margin: 0.5rem;


 `;




// .place-item__modal-content {
//   padding: 0;
// }

// .place-item__modal-actions {
//   text-align: right;
// }
