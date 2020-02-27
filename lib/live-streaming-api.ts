import axios from 'axios';
export interface JoinHostParams {
  roomId: string;
  userName: string;
}
export interface JoinGuestParams {
  roomId: string;
  userId: string;
  userName: string;
}
export class LiveStreamingAPI {
  constructor(private lsaEndpoint: string, private secretKey: string) { }
  async joinHost(params: JoinHostParams): Promise<{html: string}> {
    return axios.post(
      this.lsaEndpoint + '/join/host',
      params,
      { headers: {'Authorization': this.secretKey }}
    ).then(function(response) {
      return response.data;
    }).catch(function(){
      return { html: ''};
    });
  };
  async joinGuest(params: JoinGuestParams): Promise<{html: string}> {
    return axios.post(
      this.lsaEndpoint + '/join/guest',
      params,
      { headers: {'Authorization': this.secretKey }}
    ).then(function(response) {
      return response.data;
    }).catch(function(){
      return { html: ''};
    });
  };
}