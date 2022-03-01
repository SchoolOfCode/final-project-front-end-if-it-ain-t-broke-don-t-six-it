import { Tags } from "./tags-styled";
type Props = {
  tags: { tag: string; tag_id: number }[];
};
function TagsComponent({ tags }: Props) {
  return (
    <>
      {tags.map((tag) => {
        return <Tags key={tag.tag_id}>{tag.tag}</Tags>;
      })}
      )
    </>
  );
}
export default TagsComponent;
