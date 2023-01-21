class UserDTO {
    constructor(data) {
        this._id = data._id;
        this.fullName = `${data.firstName} ${data.lastName}` 
        this.username = data.username;
        this.email = data.email;
        this.address = data.address;
        this.isAdmin = data.isAdmin;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    };
};

export default UserDTO;