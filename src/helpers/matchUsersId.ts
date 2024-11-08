export const matchUserId = (array: any[], userId: string): boolean => {
  console.log(array.some((follow) => follow.followed_user_id._id === userId));
  return array.some((follow) => follow.followed_user_id._id === userId);
};
