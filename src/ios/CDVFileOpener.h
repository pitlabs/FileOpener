//
//  FileOpenerIOS.h
//  FileOpenerIOS
//
//  Copyright (c) 2013 RWTH Aachen. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Cordova/CDV.h>

@interface CDVFileOpener : CDVPlugin

- (void)openFile:(CDVInvokedUrlCommand*)command;

@end
