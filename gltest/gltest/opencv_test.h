//
//  opencv_test.h
//  gltest
//
//  Created by jin.li on 17/3/3.
//  Copyright © 2017年 jin.li. All rights reserved.
//

#ifndef opencv_test_h
#define opencv_test_h

#include <opencv2/opencv.hpp>
#include <opencv2/highgui.hpp>

void opencv_test(char * argv[])
{
    std::string xmlPath="/Users/funplus/Documents/libs/opencv/opencv/data/haarcascades/haarcascade_frontalface_default.xml";
    cv::CascadeClassifier ccf;   //创建分类器对象
    cv::Mat img = cv::imread("/Users/funplus/Documents/workspaceother/gltest/Resources/test1.jpg");
    if(!ccf.load(xmlPath))   //加载训练文件
    {
        std::cout<<"不能加载指定的xml文件"<<std::endl;
        return;
    }
    std::vector<cv::Rect> faces;  //创建一个容器保存检测出来的脸
    cv::Mat gray;
    cvtColor(img,gray,CV_BGR2GRAY); //转换成灰度图，因为harr特征从灰度图中提取
    equalizeHist(gray,gray);  //直方图均衡行
    ccf.detectMultiScale(gray,faces,1.1,3,0,cv::Size(10,10),cv::Size(120,120)); //检测人脸
    for(std::vector<cv::Rect>::const_iterator iter=faces.begin();iter!=faces.end();iter++)
    {
        rectangle(img,*iter,cv::Scalar(0,0,255),2,8); //画出脸部矩形
    }
    cv::imshow("faces",img);
    cv::waitKey(0);
}

void opencv_test2(char * argv[])
{
    std::string xmlPath="/Users/funplus/Documents/libs/opencv/opencv/data/haarcascades/haarcascade_frontalface_default.xml";
    cv::CascadeClassifier ccf;   //创建分类器对象
    if(!ccf.load(xmlPath))   //加载训练文件
    {
        std::cout<<"不能加载指定的xml文件"<<std::endl;
        return;
    }
    
    cv::VideoCapture inputVideo(0);
    cv::Mat src;
    for(;;)
    {
        inputVideo >> src;
        if (!src.empty())
        {
            std::vector<cv::Rect> faces;  //创建一个容器保存检测出来的脸
            cv::Mat gray;
            cvtColor(src,gray,CV_BGR2GRAY); //转换成灰度图，因为harr特征从灰度图中提取
            equalizeHist(gray,gray);  //直方图均衡行
            ccf.detectMultiScale(gray,faces,1.1,3,0,cv::Size(10,10),cv::Size(500,500)); //检测人脸
            for(std::vector<cv::Rect>::const_iterator iter=faces.begin();iter!=faces.end();iter++)
            {
                rectangle(src,*iter,cv::Scalar(0,0,255),2,8); //画出脸部矩形
            }
            
            cv::imshow("faces",src);
        }
        
        cv::waitKey(30);
    }
}

#endif /* opencv_test_h */
