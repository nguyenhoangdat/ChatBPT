const urlCore = 'http://bigprotech.vn:5001/api/';
const urlChat = 'http://bigprotech.vn:5002/api/';

//-----------------------------------Register Token

// POST
async function RegisterToken(username, password) {
  var link = urlCore + 'login/RegisterToken?DomainName=Residential Communication Channel&Username=' + username + '&Password=' + password;
  try {
    let res = await fetch(link, {
      method: 'POST',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}

// GET
async function ListAllBuilding() {
  var link = urlChat + 'Building/ListAllBuilding';
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function GetUsersByUserName(username, token) {
  var link = urlCore + 'user/GetUserbyName?DomainName=Residential Communication Channel&Username=' + username;
  try {
    let res = await fetch(link, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token },
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function GetUserbyUserId(userID, token) {
  var link = urlCore + 'user/GetUserbyUserId?UserId=' + userID + '&DomainName=Residential Communication Channel';
  try {
    let res = await fetch(link, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token },
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function GetInfoUserbyUserId(userID, token) {
  var link = urlCore + 'user/GetInfoUserbyUserId?UserId=' + userID + '&DomainName=Residential Communication Channel';
  try {
    let res = await fetch(link, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token },
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function GetSingleAdminbyBuildingID(buildingid) {
  var link = urlChat + 'AdminBuilding/GetSingleAdminbyBuildingID?BuildingID=' + buildingid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function GetNewestMessageByGroupID(groupdid) {
  var link = urlChat + 'Message/GetNewestMessageByGroupID?GroupId=' + groupdid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function ListAllChatGroupsbyBuildingID(buildingid) {
  var link = urlChat + 'ChatGroup/ListAllChatGroupsbyBuildingID?BuildingId=' + buildingid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}

//-----------------------------------Chat
// POST
async function AddChatGroup(ChatGrName, Status, AdminGrID, GroupImage, IsServiceGr, BuildingID, GuestID) {
  var link = urlChat + 'ChatGroup/AddChatGroup';
  try {
    let res = await fetch(link, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        ChatGrName: ChatGrName,
        Status: Status,
        AdminGrID: AdminGrID,
        GroupImage: GroupImage,
        IsServiceGr: IsServiceGr,
        BuildingID: BuildingID,
        GuestID: GuestID
      })
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function AddPrivateChatGroup(ChatGrName, Status, AdminGrID, GroupImage, IsServiceGr, BuildingID, GuestID, Type) {
  var link = urlChat + 'ChatGroup/AddPrivateChatGroup';
  try {
    let res = await fetch(link, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        ChatGrName: ChatGrName,
        Status: Status,
        AdminGrID: AdminGrID,
        GroupImage: GroupImage,
        IsServiceGr: IsServiceGr,
        BuildingID: BuildingID,
        GuestID: GuestID,
        Type: Type
      })
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function AddPrivateChatGroupSPtoResident(ChatGrName, Status, AdminGrID, GroupImage, IsServiceGr, BuildingID, GuestID, Type) {
  var link = urlChat + 'ChatGroup/AddPrivateChatGroupSPtoResident';
  try {
    let res = await fetch(link, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        ChatGrName: ChatGrName,
        Status: Status,
        AdminGrID: AdminGrID,
        GroupImage: GroupImage,
        IsServiceGr: IsServiceGr,
        BuildingID: BuildingID,
        GuestID: GuestID,
        Type: Type
      })
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function AddGrMember(ChatGroupID, MemberID) {
  var link = urlChat + 'ChatGroupMember/AddGrMember?chatGroupID=' + ChatGroupID + '&MemberID=' + MemberID;
  try {
    let res = await fetch(link, {
      method: 'POST',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
// GET
async function GetSinglePrivateChatGroupbyGuestID(AdminID, BuildingID, GuestID) {
  var link = urlChat + 'ChatGroup/GetSinglePrivateChatGroupbyGuestID?AdminID=' + AdminID + '&BuildingID=' + BuildingID + '&GuestID=' + GuestID;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function ListAllGroupbyMemberID(userid) {
  var link = urlChat + 'ChatGroupMember/ListAllGroupbyMemberID?MemberID=' + userid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function GetAllGroupForMember(userid) {
  var link = urlChat + 'ChatGroupMember/GetAllGroupForMember?UserID=' + userid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function GetAllGroupResidentByUserID(userid) {
  var link = urlChat + 'ChatGroupMember/GetAllGroupResidentByUserID?UserID=' + userid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function GetAllGroupProviderByUserID(userid) {
  var link = urlChat + 'ChatGroupMember/GetAllGroupProviderByUserID?UserID=' + userid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function ListAllGroupChatPublicinBuilding(BuildingID) {
  var link = urlChat + 'ChatGroup/ListAllGroupChatPublicinBuilding?BuildingID' + BuildingID;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
//-----------------------------------Resident

// POST
async function SignInResident(username, password) {
  var link = urlCore + 'login/login?DomainName=Residential Communication Channel&Username=' + username + '&Password=' + password;
  try {
    let res = await fetch(link, {
      method: 'POST',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function ResidentBuildingRegister(userid, username, buildingid) {
  var link = urlChat + 'ResidentBuildingRegister/AddRegisterMember?ResidentID=' + userid + '&Username=' + username + '&BuildingID=' + buildingid;
  try {
    let res = await fetch(link, {
      method: 'POST',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function AddFeedback(Title, Context, Sender, Receiver, DatePost, Status, BuildingID) {
  var link = urlChat + 'Feedback/AddFeedback?Title=' + Title + '&Context=' + Context + '&Sender=' + Sender + '&Receiver=' + Receiver + '&DatePost=' + DatePost + '&Status=' + Status + '&BuildingID=' + BuildingID;
  try {
    let res = await fetch(link, {
      method: 'POST',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function AddResidentFollow(userid, providerid, buildingid) {
  var link = urlChat + 'ResidentFollow/AddResidentFollow?ResidentID=' + userid + '&ProviderID=' + providerid + '&BuildingID=' + buildingid;
  try {
    let res = await fetch(link, {
      method: 'POST',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}

// DELETE
async function DeleteResidentFollow(userid, providerid, buildingid) {
  var link = urlChat + 'ResidentFollow/DeleteResidentFollow?ResidentID=' + userid + '&ProviderID=' + providerid + '&BuildingID=' + buildingid;
  try {
    let res = await fetch(link, {
      method: 'DELETE',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}

// GET
async function ListAllBuildingbyResidentID(userid) {
  var link = urlChat + 'Building/ListAllBuildingbyResidentID?ResidentID=' + userid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function ListAllProviderInfobyBuildingID(buildingid) {
  var link = urlChat + 'ProviderBuilding/ListAllProviderInfobyBuildingID?BuildingID=' + buildingid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function ListAllResidentFollowByResidentID(userid, buildingid) {
  var link = urlChat + 'ResidentFollow/ListAllProviderByResidentID?ResidentID=' + userid + '&BuildingID=' + buildingid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function ListAllFeedbackbyReceiverID(userid, buildingid) {
  var link = urlChat + 'Feedback/ListAllFeedbackbyReceiverID?ReceiverID=' + userid + '&BuildingID=' + buildingid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function ListAllResidentFollowByResident(userid, buildingid) {
  var link = urlChat + 'ResidentFollow/ListAllResidentFollowByResidentID?ResidentID=' + userid + '&BuildingID=' + buildingid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function CheckedFollow(userid, providerid, buildingid) {
  var link = urlChat + 'ResidentFollow/CheckedFollow/?ResidentID=' + userid + '&ProviderID=' + providerid + '&BuildingID=' + buildingid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}

//-----------------------------------Service Provider

// POST
async function AddProviderRegister(ProviderID, Username, BuildingID) {
  var link = urlChat + 'ProviderBuildingRegister/AddRegisterMember?ProviderID=' + ProviderID + '&Username=' + Username + '&BuildingID=' + BuildingID;
  try {
    let res = await fetch(link, {
      method: 'POST',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}

async function AddProviderPost(Title, Description, Image, Status, ProviderID, Price, buildingID, Token) {
  var link = urlChat + 'ProviderPost/AddProviderPost';
  try {
    let res = await fetch(link, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + Token
      },
      body: JSON.stringify({
        Title: Title,
        Description: Description,
        Image: Image,
        Status: Status,
        ProviderID: ProviderID,
        Price: Price,
        BuildingID: buildingID,
      })
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}

// GET
async function GetSingleProviderService(userid) {
  var link = urlChat + 'Provider/GetSingleProviderService?ProviderID=' + userid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function ListAllBuildingbyProviderID(userid) {
  var link = urlChat + 'Building/ListAllBuildingbyProviderID?ProviderID=' + userid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function ListAllProviderPostbyProviderIdInBuilding(userid, buildingid) {
  var link = urlChat + 'ProviderPost/ListAllProviderPostbyProviderIdInBuilding?ProviderID=' + userid + '&BuildingID=' + buildingid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}
async function GetSingleProviderPost(postid) {
  var link = urlChat + 'ProviderPost/GetSingleProviderPost?ProviderPostID=' + postid;
  try {
    let res = await fetch(link, {
      method: 'GET',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}

// UPDATE
async function UpdateProviderPost(PostID, Title, Description, Image, Status, ProviderID, Price, buildingID, Token) {
  var link = urlChat + 'ProviderPost/UpdateProviderPost';
  try {
    let res = await fetch(link, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + Token
      },
      body: JSON.stringify({
        ID: PostID,
        Title: Title,
        Description: Description,
        Image: Image,
        Status: Status,
        ProviderID: ProviderID,
        Price: Price,
        BuildingID: buildingID,
      })
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}

// DELETE
async function DeleteProviderPost(PostID) {
  var link = urlChat + 'ProviderPost/DeleteProviderPost?ProviderPostID=' + PostID;
  try {
    let res = await fetch(link, {
      method: 'DELETE',
    })
    return await res.text();
  } catch (error) {
    alert('Lỗi mạng! Xin kiểm tra lại đường truyền');
  }
}

export {
  SignInResident, RegisterToken, GetUsersByUserName, ListAllBuildingbyResidentID, ListAllBuildingbyProviderID,
  ListAllBuilding, ListAllProviderInfobyBuildingID, ListAllFeedbackbyReceiverID, AddFeedback, GetSingleAdminbyBuildingID,
  ListAllProviderPostbyProviderIdInBuilding, ListAllResidentFollowByResidentID, ResidentBuildingRegister,
  ListAllResidentFollowByResident, CheckedFollow, AddResidentFollow, DeleteResidentFollow, GetNewestMessageByGroupID,
  ListAllChatGroupsbyBuildingID, ListAllGroupbyMemberID, AddProviderRegister, AddProviderPost, GetAllGroupForMember,
  GetSingleProviderPost, GetSingleProviderService, UpdateProviderPost, DeleteProviderPost, GetSinglePrivateChatGroupbyGuestID,
  AddChatGroup, AddGrMember, AddPrivateChatGroup, GetUserbyUserId, GetInfoUserbyUserId, AddPrivateChatGroupSPtoResident, GetAllGroupResidentByUserID, GetAllGroupProviderByUserID,
  ListAllGroupChatPublicinBuilding,
};