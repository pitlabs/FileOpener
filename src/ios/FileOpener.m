//
//  FileOpener.m
//  FileOpener
//
//  Copyright (c) 2013 RWTH Aachen. All rights reserved.
//

#import <Cordova/CDV.h>
#import "FileOpener.h"

@implementation FileOpener

- (void)openFile:(CDVInvokedUrlCommand*)command

{
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"Hello - that's your plugin :)"];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
