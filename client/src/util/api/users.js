import users from "../../../../users";

export const fetchUsers = ({
  request = {},
  mockProps = [],
  shouldFail = false
}) => {
  return new Promise((res, rej) => {
    window.setTimeout(() => {
      if (shouldFail) {
        rej();
      } else {
        if (request.client.username && request.client.password) {
          const userList = users;
          [...Object.keys(userList.users)].forEach(userId => {
            let user = userList.users[userId];
            if (
              user.username === request.client.username &&
              user.password === request.client.password
            ) {
              return res({
                data: user,
                mockRequest: request
              });
            }
          });
          return rej("no use found");
        }
        return rej("no username");
      }
    }, 1500);
  });
};
