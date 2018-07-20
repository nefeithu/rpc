﻿// **********************************************************************
// This file was generated by a TARS parser!
// TARS version 1.0.1.
// **********************************************************************

var assert     = require('assert');
var TarsStream = require('@tars/stream');
var TarsError  = require('@tars/rpc').error;

var tars = tars || {};
module.exports.tars = tars;


tars.NodeSecondImp = function () { 
    this._name   = undefined;
    this._worker = undefined;
}

tars.NodeSecondImp.prototype.initialize = function () { 
    //TODO:
}

tars.NodeSecondImp.prototype.onDispatch = function (current, FuncName, BinBuffer) { 
    switch (FuncName) {
        case 'tars_ping': {
                current.sendResponse = function (_ret) {
                        if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX){
                                var tup = new TarsStream.UniAttribute();
                                tup.tupVersion = current.getRequestVersion();
                                tup.writeInt32("", _ret);
                                current.doResponse(tup.encode());
                        }else{
                                var os = new TarsStream.TarsOutputStream();
                                os.writeInt32(0, _ret);
                                current.doResponse(os.getBinBuffer());
                        }
                }
                        current.sendResponse(0);
                return TarsError.SUCCESS;
        }
        case 'test' : {
            current.sendResponse = function (_ret) {
                if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
                    var tup = new TarsStream.UniAttribute();
                    tup.tupVersion = current.getRequestVersion();
                    tup.writeInt32("", _ret);

                    current.doResponse(tup.encode());
                } else {
                    var os = new TarsStream.TarsOutputStream();
                    os.writeInt32(0, _ret);

                    current.doResponse(os.getBinBuffer());
                }
            }

            this.test(current);

            return TarsError.SUCCESS;
        }
        case 'yourName' : {
            if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
                var tup = new TarsStream.UniAttribute();
                tup.tupVersion = current.getRequestVersion();
                tup.decode(BinBuffer);
                var sName = tup.readString("sName");
                var sUserName = tup.readString("sUserName", "");
            } else {
                var is = new TarsStream.TarsInputStream(BinBuffer);
                var sName = is.readString(1, true);
                var sUserName = is.readString(2, false);
            }
            current.sendResponse = function (_ret, sUserName) {
                if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
                    var tup = new TarsStream.UniAttribute();
                    tup.tupVersion = current.getRequestVersion();
                    tup.writeString("", _ret);
                    tup.writeString("sUserName", sUserName);

                    current.doResponse(tup.encode());
                } else {
                    var os = new TarsStream.TarsOutputStream();
                    os.writeString(0, _ret);
                    os.writeString(2, sUserName);

                    current.doResponse(os.getBinBuffer());
                }
            }

            this.yourName(current, sName, sUserName);

            return TarsError.SUCCESS;
        }
    }
    return TarsError.SERVER.FUNC_NOT_FOUND;
}

tars.NodeSecondImp.prototype.test = function (current) {
    //TODO:
    assert.fail('test function not implemented');
}

tars.NodeSecondImp.prototype.yourName = function (current, sName, sUserName) {
    //TODO:
    assert.fail('yourName function not implemented');
}





