export class ResponseBodyModel {

    public success = false;
    public result: any;
    public message: string | undefined;
    public pagination: [string] | undefined;

    constructor(response: any) {
        if (response) {
            if (response.body) {
                if (response.body.success) this.success = response.body.success;
                if (response.body.result) this.result = response.body.result;
                if (response.body.message) this.message = response.body.message;
                if (response.body.pagination) this.pagination = response.body.pagination;
            } else if (response.error) {
                this.message = response.error.message ? response.error.message : "service is unavailable at the moment";
            }
        } else {
            this.result = response;
        }
    }
}
