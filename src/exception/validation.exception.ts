import {HttpException, HttpStatus} from "@nestjs/common";
import {response} from "express";

export class ValidationException extends HttpException {
    messages;

    constructor(res) {
        super(res, HttpStatus.BAD_REQUEST);
        this.messages = response
    }

}