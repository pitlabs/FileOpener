#import <UIKit/UIKit.h>
#import <Cordova/CDV.h>

@interface FileOpener : CDVPlugin

- (void)openFile:(CDVInvokedUrlCommand*)command;

@end
