export class ResponseStatusModel {
  // ****** Information responses ******

  public Continue = false;
  // 100: This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.

  public SwitchingProtocol = false;
  // 101: This code is sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to.

  public Processing = false;
  // 102 : This code indicates that the server has received and is processing the request, but no response is available yet.

  public EarlyHints = false;
  // 103: This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.

  // ****** Successful responses ******

  public OK = false;
  // 200: The request has succeeded. The meaning of the success depends on the HTTP method:
  // GET: The resource has been fetched and is transmitted in the message body.
  // HEAD: The entity headers are in the message body.
  // PUT or POST: The resource describing the result of the action is transmitted in the message body.
  // TRACE: The message body contains the request message as received by the server

  public Created = false;
  // 201: The request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests, or some PUT requests.

  public Accepted = false;
  // 202: The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.

  public Non_Authoritative_Information = false;
  // 203: This response code means the returned meta-information is not exactly the same as available from the origin server, but collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, 200 OK response should be preferred instead of this status.

  public No_Content = false;
  // 204: There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.

  public Reset_Content = false;
  // 205: Tells the user-agent to reset the document which sent this request.

  public Partial_Content = false;
  // 206: This response code is used when the Range header is sent from the client to request only part of a resource.

  public Multi_Status = false;
  // 207: Conveys information about multiple resources, for situations where multiple status codes might be appropriate.

  public Already_Reported = false;
  // 208: Used inside a <dav:propstat> response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly.

  public IM_Used = false;
  // 226: The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

  // ****** Redirectionmessages ******

  public Multiple_Choice = false;
  // 300: The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)

  public Moved_Permanently = false;
  // 301: The URL of the requested resource has been changed permanently. The new URL should be given in the response.

  public Found = false;
  // 302: This response code means that the URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.

  public See_Other = false;
  // 303:The server sent this response to direct the client to get the requested resource at another URI with a GET request.

  public Not_Modified = false;
  // 304: This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.

  public Use_Proxy = false;
  // 305: Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.

  public unused = false;
  // 306: This response code is no longer used, it is just reserved. It was used in a previous version of the HTTP/1.1 specification.

  public Temporary_Redirect = false;
  // 307: The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.

  public Permanent_Redirect = false;
  // 308: This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.

  // ****** Client error responses ******

  public Bad_Request = false;
  // 400: The server could not understand the request due to invalid syntax.

  public Unauthorized = false;
  // 401: Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

  public Payment_Required = false;
  // 402: This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.

  public Forbidden = false;
  // 403: The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.

  public Not_Found = false;
  // 404: The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.

  public Method_Not_Allowed = false;
  // 405: The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.

  public Not_Acceptable = false;
  // 406: This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.

  public Proxy_Authentication_Required = false;
  // 407: This is similar to 401 but authentication is needed to be done by a proxy.

  public Request_Timeout = false;
  // 408: This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.

  public Conflict = false;
  // 409: This response is sent when a request conflicts with the current state of the server.

  public Gone = false;
  // 410: This response would be sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.

  public Length_Required = false;
  // 411: Server rejected the request because the Content-Length header field is not defined and the server requires it.

  public Precondition_Failed = false;
  // 412: The client has indicated preconditions in its headers which the server does not meet.

  public Payload_Too_Large = false;
  // 413: Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.

  public URI_Too_Long = false;
  // 414: The URI requested by the client is longer than the server is willing to interpret.

  public Unsupported_Media_Type = false;
  // 415: The media format of the requested data is not supported by the server, so the server is rejecting the request.

  public Requested_Range_Not_Satisfiable = false;
  // 416: The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.

  public Expectation_Failed = false;
  // 417: This response code means the expectation indicated by the Expect request header field can't be met by the server.

  public Misdirected_Request = false;
  // 421: The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.

  public Unprocessable_Entity = false;
  // 422: The request was well-formed but was unable to be followed due to semantic errors.

  public Locked = false;
  // 423: The resource that is being accessed is locked.

  public Failed_Dependency = false;
  // 424: The request failed due to failure of a previous request.

  public Too_Early = false;
  // 425: Indicates that the server is unwilling to risk processing a request that might be replayed.

  public Upgrade_Required = false;
  // 426: The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).

  public Precondition_Required = false;
  // 428: The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.

  public Too_Many_Requests = false;
  // 429: The user has sent too many requests in a given amount of time ("rate limiting").

  public Request_Header_Fields_Too_Large = false;
  // 431: The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.

  public Unavailable_For_Legal_Reasons = false;
  // 451: The user requests an illegal resource, such as a web page censored by a government.

  // ****** Server error responses ******

  public Internal_Server_Error = false;
  // 500: The server has encountered a situation it doesn't know how to handle.

  public Not_Implemented = false;
  // 501: The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.

  public Bad_Gateway = false;
  // 502: This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.

  public Service_Unavailable = false;
  // 503: The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.

  public Gateway_Timeout = false;
  // 504: This error response is given when the server is acting as a gateway and cannot get a response in time.

  public HTTP_Version_Not_Supported = false;
  // 505: The HTTP version used in the request is not supported by the server.

  public Variant_Also_Negotiates = false;
  // 506: The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.

  public Insufficient_Storage = false;
  // 507: The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.

  public Loop_Detected = false;
  // 508: The server detected an infinite loop while processing the request.

  public Not_Extended = false;
  // 510: Further extensions to the request are required for the server to fulfil it.

  public Network_Authentication_Required = false;
  // 511: the client needs to authenticate to gain network access.

  constructor(response: any) {
    if (response && response.status) {
      switch (response.status) {
        // ****** Information responses ******
        case 100:
          this.Continue = true;
          break;
        case 101:
          this.SwitchingProtocol = true;
          break;
        case 102:
          this.Processing = true;
          break;
        case 103:
          this.EarlyHints = true;
          break;

        // ****** Successful responses ******
        case 200:
          this.OK = true;
          break;
        case 201:
          this.Created = true;
          break;
        case 202:
          this.Accepted = true;
          break;
        case 203:
          this.Non_Authoritative_Information = true;
          break;
        case 204:
          this.No_Content = true;
          break;
        case 205:
          this.Reset_Content = true;
          break;
        case 206:
          this.Partial_Content = true;
          break;
        case 207:
          this.Multi_Status = true;
          break;
        case 208:
          this.Already_Reported = true;
          break;
        case 226:
          this.IM_Used = true;
          break;

        // ****** Redirectionmessages ******
        case 300:
          this.Multiple_Choice = true;
          break;
        case 301:
          this.Moved_Permanently = true;
          break;
        case 302:
          this.Found = true;
          break;
        case 303:
          this.See_Other = true;
          break;
        case 304:
          this.Not_Modified = true;
          break;
        case 305:
          this.Use_Proxy = true;
          break;
        case 306:
          this.unused = true;
          break;
        case 307:
          this.Temporary_Redirect = true;
          break;
        case 308:
          this.Permanent_Redirect = true;
          break;

        // ****** Client error responses ******
        case 400:
          this.Bad_Request = true;
          break;
        case 401:
          this.Unauthorized = true;
          break;
        case 402:
          this.Payment_Required = true;
          break;
        case 403:
          this.Forbidden = true;
          break;
        case 404:
          this.Not_Found = true;
          break;
        case 405:
          this.Method_Not_Allowed = true;
          break;
        case 406:
          this.Not_Acceptable = true;
          break;
        case 407:
          this.Proxy_Authentication_Required = true;
          break;
        case 408:
          this.Request_Timeout = true;
          break;
        case 409:
          this.Conflict = true;
          break;
        case 410:
          this.Gone = true;
          break;
        case 411:
          this.Length_Required = true;
          break;
        case 412:
          this.Precondition_Failed = true;
          break;
        case 413:
          this.Payload_Too_Large = true;
          break;
        case 414:
          this.URI_Too_Long = true;
          break;
        case 415:
          this.Unsupported_Media_Type = true;
          break;
        case 416:
          this.Requested_Range_Not_Satisfiable = true;
          break;
        case 417:
          this.Expectation_Failed = true;
          break;
        case 421:
          this.Misdirected_Request = true;
          break;
        case 422:
          this.Unprocessable_Entity = true;
          break;
        case 423:
          this.Locked = true;
          break;
        case 424:
          this.Failed_Dependency = true;
          break;
        case 425:
          this.Too_Early = true;
          break;
        case 426:
          this.Upgrade_Required = true;
          break;
        case 428:
          this.Precondition_Required = true;
          break;
        case 429:
          this.Too_Many_Requests = true;
          break;
        case 431:
          this.Request_Header_Fields_Too_Large = true;
          break;
        case 451:
          this.Unavailable_For_Legal_Reasons = true;
          break;

        // ****** Server error responses ******
        case 500:
          this.Internal_Server_Error = true;
          break;
        case 501:
          this.Not_Implemented = true;
          break;
        case 502:
          this.Bad_Gateway = true;
          break;
        case 503:
          this.Service_Unavailable = true;
          break;
        case 504:
          this.Gateway_Timeout = true;
          break;
        case 505:
          this.HTTP_Version_Not_Supported = true;
          break;
        case 506:
          this.Variant_Also_Negotiates = true;
          break;
        case 507:
          this.Insufficient_Storage = true;
          break;
        case 508:
          this.Loop_Detected = true;
          break;
        case 510:
          this.Not_Extended = true;
          break;
        case 511:
          this.Network_Authentication_Required = true;
          break;
      }
    }
  }
}
