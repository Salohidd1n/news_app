export async function changeCommentById(
  items: any,
  value: any,
  childId: number | undefined
) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === childId) {
      items[i].comments = value
      return
    } else if (items[i].kids && items[i].kids.length > 0 && items[i].comments) {
      changeCommentById(items[i].comments, value, childId)
    }
  }
}
