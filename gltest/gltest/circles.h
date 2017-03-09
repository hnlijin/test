//
//  circles.h
//  gltest
//
//  Created by jin.li on 17/2/23.
//  Copyright © 2017年 jin.li. All rights reserved.
//

#ifndef circles_h
#define circles_h

#include <GLUT/GLUT.h>
#include "utils.h"

#define checkImageWidth  64
#define checkImageHeight 64

GLubyte checkImage [checkImageWidth][checkImageHeight][4];
GLuint texName;

GLvoid drawTextureCircle(const GLfloat radius, const GLuint num_vertex)
{
    GLfloat vertex[4];
    GLfloat texcoord[2];
    
    const GLfloat delta_angle = 2.0 * M_PI / num_vertex;
    
    glEnable(GL_TEXTURE_2D);
    glBindTexture(GL_TEXTURE_2D, texName);
    glTexEnvi(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_REPLACE);
    
    glBegin(GL_TRIANGLE_FAN);
    {
        //draw the vertex at the center of the circle
        texcoord[0] = 0.5;
        texcoord[1] = 0.5;
        glTexCoord2fv(texcoord);
        vertex[0] = vertex[1] = vertex[2] = 0.0;
        vertex[3] = 1.0;
        glVertex4fv(vertex);
        
        //draw the vertex on the contour of the circle
        for(GLuint i = 0; i < num_vertex ; i++)
        {
            texcoord[0] = (cos(delta_angle * i) + 1.0) * 0.5;
            texcoord[1] = (sin(delta_angle * i) + 1.0) * 0.5;
            glTexCoord2fv(texcoord);
            
            vertex[0] = cos(delta_angle * i) * radius;
            vertex[1] = sin(delta_angle * i) * radius;
            vertex[2] = 0.0;
            vertex[3] = 1.0;
            glVertex4fv(vertex);
        }
        
        texcoord[0] = (1.0 + 1.0) * 0.5;
        texcoord[1] = (0.0 + 1.0) * 0.5;
        glTexCoord2fv(texcoord);
        
        vertex[0] = 1.0 * radius;
        vertex[1] = 0.0 * radius;
        vertex[2] = 0.0;
        vertex[3] = 1.0;
        glVertex4fv(vertex);
    }
    glEnd();
    
    glDisable(GL_TEXTURE_2D);
}

void makeCheckImage()
{
    int  i, j, c;
    for (i = 0; i < checkImageHeight; i++)
    {
        for (j = 0; j < checkImageWidth; j++)
        {
            c = ((((i & 0x8) == 0) ^ (j & 0x8)) == 0) * 255;
            checkImage[i][j][0] = (GLubyte)c;
            checkImage[i][j][1] = (GLubyte)c;
            checkImage[i][j][2] = (GLubyte)c;
            checkImage[i][j][3] = (GLubyte)255;
        }
    }
}

void circleInit()
{
    glClearColor(0.0f, 0.0f, 0.0f, 0.0f);
    glShadeModel(GL_SMOOTH);
    
    makeCheckImage();
    glPixelStorei(GL_UNPACK_ALIGNMENT, 1);
    
    glGenTextures(1, &texName);
    glBindTexture(GL_TEXTURE_2D, texName);
    
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);
    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, checkImageWidth, checkImageHeight, 0, GL_RGBA, GL_UNSIGNED_BYTE, checkImage);
    
}

void circleDisplay()
{
    glClear(GL_COLOR_BUFFER_BIT);
    
    glLineWidth(3.0);
    glColor3f(1.0f, 1.0f, 1.0f);
    drawCircle(0.0f, 0.0f, 2.0f, 20);
    glColor3f(1.0f, 1.0f, 0.0f);
    drawCircle(0.0f, 0.0f, 1.5f, 20);
    glColor3f(1.0f, 1.0f, 1.0f);
    drawTextureCircle(1.0f, 20.0f);
    
    glFlush();
    glutSwapBuffers();
}

#endif /* circles_h */
