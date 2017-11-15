/**
 * Created by vv on 23/06/2017.
 */

import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class HttpService {
    // private host = 'http://127.0.0.1:8000/';
    host = 'https://www.chumi.co';
    imghost = 'https://dhjjgq45wu4ho.cloudfront.net/';
    options = new RequestOptions({ withCredentials: true });
    constructor(private http:Http) { }

    postSignin(data){
        var url = this.host+'/member/login';
        return this.http.post(url, data,this.options).map(
            res => res.json()
        );
    }

  postSignup(data){
    var url = this.host+'/member/regNoInvite';
    return this.http.post(url, data).map(
      res => res.json()
    );
  }
  postLogout(){
    var url = this.host+'/member/logout';
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }
  postCheckDuplicateEmail(data){
    var url = this.host+'/member/checkEmailDuplicate';
    return this.http.post(url, data).map(
      res => res.json()
    );
  }


  getBasicInfo(){
    var url = this.host+'/uploadUserBasicInfo/ulevel';
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  getUserInfo(data){
    var url = this.host+'/uploadUserBasicInfo/u/' + data;
    console.log(url);
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  getUserInfoTempPass(data){
    var url = this.host+'/uploadUserBasicInfo/uin/' + data;
    console.log(url);
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  getMyCircleInfo(data){
    var url = this.host+'/uploadCircle/myXiaomiquan/' + data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  getMyFollowingCircleInfo(data){
    var url = this.host+'/uploadCircle/myfollowingXiaomiquan/' + data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  getCircleAdditionalInfo(data) {
    var url = this.host+'/uploadCircle/dataCircle/' + data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  getCircleInfo(data) {
    var url = this.host+'/uploadCircle/circleInfo/' + data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  getRecommendCircle() {
    var url = this.host+'/uploadCircle/RecommendCircles/';
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  getTicketInfo(data) {
    var url = this.host+'/stripePlan/ticket/' + data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  ticketDirectInfo(data) {
    var url = this.host+'/stripePlan/ticketDirect/' + data;
    console.log(url);
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  chargeCard(data) {
    var url = this.host+'/stripePlan/chargeFromWeb_new';
    return this.http.post(url, data, this.options).map(
      res => res.json()
    );
  }

  getEventInfo(data) {
    var url = this.host+'/Activity/acFullInfo/' + data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  getComments(data) {
    var url = this.host+'/Activity/getComments/' + data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  joinEventFree(data) {
    var url = this.host+'/stripePlan/registerEventsFromWeb';
    return this.http.post(url, data, this.options).map(
      res => res.json()
    );
  }


  //导航栏上用的-------------------------------

  //通知 有新消息需要加红点,怎么判断新消息,就是把返回的array中的第一个_id存本地起来,不一样就红点.
  //通知中的后续处理, 除了加好友,其他都是看到可以点击浏览一些页面.
  //当"type" == addFriends && ["fromId"]["_id"] != ""时 为加好友通知,
  //当ForAddFrd == true时候说明已经加了, 否则就显示一个加好友的按钮
  //加了好友 就需要之后的两个接口
  getNotifications(){
    var url = this.host + 'Activity/getMessages';
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  //data 是 ["fromId"]["_id"]
  responseToAddFriendsMessage(data){
    var url = this.host + '/member/responseToAddFriendsMessage/id/'+data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }
  //data是这个通知的_id
  clearMessagesForAddedFrd(data){
    var url = this.host + '/Activity/clearMessagesForAddedFrd/'+data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }


  //是否显示创建圈子 一个用户目前限定2个
  getNumberOfMyCircles(data){
    var url = this.host + '/uploadCircle/getMyChannel';
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  //活动用的------------------------------------

  //like/dislike the post
  //data是帖子_id
  likeThisPost(data){
    var url = this.host + '/Activity/uploadLikes/noname/ac/' + data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  //report this post
  //data应该是"reportpostid": 帖子_id
  reportThisPost(data){
    var url = this.host+'/Activity/reportApost';
    return this.http.post(url, data).map(
      res => res.json()
    );
  }

  //get the all events from main page
  // 0 默认 经纬度lat log 如果没有值
  // language需要为 "English" 或 "Chinese" 或 "English Chinese" 此处不确定你会不会自动encode 检查一下.
  getExplore(language, lat, log){
    var url = this.host + "/Activity/getExplore/"+language+"/lat/"+lat+"/log/"+log;
    return this.http.get(url, this.options).map(
      res => res.json()
    );

  }

  //get the feed from tags "All" 或 "所有" 或 所有的标签点击后访问的api
  // pageIndex 翻页,每20个一页
  // currentTime 客户端时间
  // currentTag 此标签主题 显示在nav滑动条上的
  // language需要为 "English" 或 "Chinese" 或 "English Chinese" 此处不确定你会不会自动encode 检查一下.
  // count客户端访问接口次数
  getFeedFromTag(pageIndex, language, lat, log, currentTime,currentTag, count){
    var url = this.host + "/Activity/getAllActivitiesAndAds/"+pageIndex+"/latitude/"+lat+"/longitude/"+log+"/timezone/"+currentTime+"/l/"+language+"/t/"+currentTag+"/count/"+count;
    console.log(url);
    return this.http.get(url, this.options).map(
      res => res.json()
    );

  }

  //data is post _id
  getCommentsForPost(data){
    var url = this.host + "/Activity/getComments/"+data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );

  }

  //上传活动
  //data
//  multipartFormData: { multipartFormData in
//    for i in (0 ..< self.imageArray.count) {
//    if let imageData = UIImageJPEGRepresentation(self.imageArray[i], 0.5){
//    if i == 0 {
//    multipartFormData.append(imageData, withName: "cover",fileName: "test\(i).jpg", mimeType: "image/jpg")
//  }else {
//  multipartFormData.append(imageData, withName: "activityPictures",fileName: "test\(i).jpg", mimeType: "image/jpg")
//}
//
//multipartFormData.append(
//  (self.tit.data(using: String.Encoding.utf8)!),
//withName: "title"
//)
//
//multipartFormData.append(
//  self.content.data(using: String.Encoding.utf8)!,
//  withName: "content"
//)
//multipartFormData.append(
//  self.hideName.data(using: String.Encoding.utf8)!,
//  withName: "hideName"
//)
//multipartFormData.append(
//  self.DeadTime.data(using: String.Encoding.utf8)!,
//  withName: "DeadTime"
//)
//multipartFormData.append(
//  self.latitudes.data(using: String.Encoding.utf8)!,
//  withName: "latitudes"
//)
//multipartFormData.append(
//  self.longitudes.data(using: String.Encoding.utf8)!,
//  withName: "longitudes"
//)
//multipartFormData.append(
//  self.priceTicket.data(using: String.Encoding.utf8)!,
//  withName: "priceTicket"
//)
//multipartFormData.append(
//  self.language.data(using: String.Encoding.utf8)!,
//  withName: "language"
//)
//multipartFormData.append(
//  self.type.data(using: String.Encoding.utf8)!,
//  withName: "type"
//)
//multipartFormData.append(
//  self.link.data(using: String.Encoding.utf8)!,
//  withName: "link"
//)
//
//
//multipartFormData.append(
//  (tagStr?.data(using: String.Encoding.utf8)!)!,
//  withName: "tags"
//)
//
//multipartFormData.append(
//  (ticketName.data(using: String.Encoding.utf8)!),
//withName: "ticketName"
//)
//
//multipartFormData.append(
//  (ticketPrice.data(using: String.Encoding.utf8)!),
//withName: "ticketPrice"
//)
//
//multipartFormData.append(
//  (ticketQuantity.data(using: String.Encoding.utf8)!),
//withName: "ticketQuantity"
//)
//multipartFormData.append(
//  ("\(seatSelection)".data(using: String.Encoding.utf8)!),
//withName: "seatSelection"
//)
uploadPost(data){
    var url = this.host+'/Activity/uploadActivity';
    return this.http.post(url, data).map(
      res => res.json()
    );
  }


  //发帖管理 没写好
  managePosts(){

  }

  //圈子用的---------------------------

  //推荐的小密圈 放主页
  getRecommendedCircles(){
    var url = this.host + "/uploadCircle/RecommendCircles";
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  //创建的圈子
  //data is userid
  getMyCreatedCircles(data){
    var url = this.host + "/uploadCircle/myXiaomiquan/"+data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  //follow的圈子
  //data is userid
  getMyFollowingCircles(data){
    var url = this.host + "/uploadCircle/myfollowingXiaomiquan/"+data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  //这个圈子的一些公开数据
  //data is circle _id
  getPublicDataForCircle(data){
    var url = this.host + "/uploadCircle/dataCircle/"+data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  //退出圈子
  //data circle _id
  exitCircle(data){
    var url = this.host + "/stripePlan/CanclePlanFromApp/"+data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  //免费加入圈
  //data是圈子标签 channelID
  joinCircleForFree(data){
    var url = this.host + "/uploadUserBasicInfo/addTags/"+data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  joinGroup(data){
    var url = this.host + "/IM/group/join/groupid/" + data.groupid + "/groupname/" + data.groupname;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  getActivityById(data){
    var url = this.host + "/Activity/acFullInfo/" + data;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  //上传圈子
  //data复杂看schema
  //multipartFormData.append(
//(self.user?["_id"].stringValue.data(using: String.Encoding.utf8)!)!,
//  withName: "Vid"
//)
//  multipartFormData.append(
//(title.data(using: String.Encoding.utf8)!),
//  withName: "title"
//)
//  multipartFormData.append(
//(des.data(using: String.Encoding.utf8)!),
//  withName: "des"
//)
//  multipartFormData.append(
//("false".data(using: String.Encoding.utf8)!),
//  withName: "payType"
//)
//  multipartFormData.append(
//("\(self.willAim)".data(using: String.Encoding.utf8)!),
//  withName: "ifAllowEveryOnePost"
//)
//  multipartFormData.append(
//("\(self.paymentamount)".data(using: String.Encoding.utf8)!),
//  withName: "price"
//)
//  multipartFormData.append(
//(str.data(using: String.Encoding.utf8)!),
//  withName: "tags"
//)
//
//  multipartFormData.append(self.imageData!, withName: "circlePictures",fileName: "test.jpg", mimeType: "image/jpg")
//
  uploadCircle(data){
    var url = this.host+'/uploadCircle/';
    return this.http.post(url, data).map(
      res => res.json()
    );
  }


  //搜索 -------------------

  //search post
  //data是搜索的词
  searchPost(data,index){
    var url = this.host + "/Activity/search/"+data+"/index/"+index;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  //search post
  //data是搜索的词
  searchUser(data){
    var url = this.host + "/Activity/searchUser/"+data+"/index/100000";
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  //search post
  //data是搜索的词
  searchCircles(data){
    var url = this.host + "/Activity/searchCircle/"+data+"/index/100000";
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }



  //聊天 ------------------------------

  //好友列表
  getFriends(){
    var url = this.host + "/member/myFriends";
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  // Fetch RongCloudToken
  getRongCloudToken() {
    var url = this.host + "/IM/getToken";
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }


  // Fetch Group Info by id
  getGroupInfo(groupId) {
    var url = this.host + "/IM/group/user/query/groupAllInfo/"+groupId;
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  // Fetch Invoice by id
  getInvoice(invoiceId) {
    var url = this.host + '/stripePlan/getInvoice/' + invoiceId;
    console.log(url);
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }

  // Fetch fake communication data
  getFakeCommunicationData(lang, targetId) {
    var url = this.host + '/IM/fakeCommunication/'+lang+ '/targetId/'+ targetId;
    console.log(url);
    return this.http.get(url, this.options).map(
      res => res.json()
    );
  }
//上传活动
uploadActivity(data){
  var url = this.host+'/Activity/uploadActivity/';
  return this.http.post(url, data, this.options).map(
    res => res.json()
  );
}

    //
    // getVerify(){
    //     var url = this.host+'api/getCurrUser';
    //
    //     var token = localStorage.getItem('id_token');
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Authorization', "JWT "+token);
    //     return this.http.get(url, {headers: headers}).map(
    //         res => res.json()
    //     );
    // }
    //
    // getAlbumList(search=null){
    //     if(search) {
    //         var url = this.host + 'api/album/?search='+search+'&ordering=-created';
    //     }else{
    //         var url = this.host + 'api/album/'+'?ordering=-created';
    //     }
    //
    //     return this.http.get(url).map(
    //         res => res.json()
    //     );
    // }
    // getAlbumListByUser(uid){
    //     var url = this.host+'api/album/?uid='+uid;
    //
    //     return this.http.get(url).map(
    //         res => res.json()
    //     );
    // }
    // postSignin(data){
    //     var url = this.host+'signin/';
    //
    //     return this.http.post(url, data).map(
    //         res => res.json()
    //     );
    // }
    //
    // postSignup(data){
    //     var url = this.host+'signup/';
    //     return this.http.post(url, data).map(
    //         res => res.json()
    //     );
    // }
    //
    // postCreateAlbum(data){
    //     var url = this.host+'api/album/create/';
    //     var token = localStorage.getItem('id_token');
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Authorization', "JWT "+token);
    //     return this.http.post(url, data, {headers: headers}).map(
    //         res => res.json()
    //     );
    // }
    // deleteAlbum(id){
    //     var url = this.host+'api/album/'+id+'/';
    //     var token = localStorage.getItem('id_token');
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Authorization', "JWT "+token);
    //     return this.http.delete(url, {headers: headers}).map(
    //         res => res.json()
    //     );
    // }
    //
    // postCreateImage(data){
    //     var url = this.host+'api/image/create/';
    //
    //     var token = localStorage.getItem('id_token');
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Authorization', "JWT "+token);
    //
    //     return this.http.post(url, data, {headers: headers}).map(
    //         res => res.json()
    //     );
    // }
}
