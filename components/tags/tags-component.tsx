import { Tags } from "./tags-styled";
type Props = {
  tags: {tag:string,
tag_id:number
}[];
};
function TagsComponent({ tags }): Props {
  return (
      {
          tags.map((tag)=>{
              return (
                  <Tags>{tag.tag}</Tags>
              )
          })
      }
  )};
//   {
//     tags.map((tag) => {
//       return <Tag>{tag.tag}</Tag>;
//     });
//   }
// }
export default TagsComponent