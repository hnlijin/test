//
//  stars.h
//  gltest
//
//  Created by jin.li on 17/2/23.
//  Copyright © 2017年 jin.li. All rights reserved.
//

#ifndef stars_h
#define stars_h

#include <GLUT/GLUT.h>

void starDisplay()
{
    glClear(GL_COLOR_BUFFER_BIT);
    
    GLfloat a = 1 / (2-2*cos(72* M_PI/180));
    GLfloat bx = a * cos(18 * M_PI/180);
    GLfloat by = a * sin(18 * M_PI/180);
    GLfloat cy = -a * cos(18 * M_PI/180);
    GLfloat
    PointA[2] = { 0, a },
    PointB[2] = { bx, by },
    PointC[2] = { 0.5, cy },
    PointD[2] = { -0.5, cy },
    PointE[2] = { -bx, by };

    // 按照A->C->E->B->D->A的顺序，可以一笔将五角星画出
    glBegin(GL_LINE_LOOP);
        glVertex2fv(PointA);
        glVertex2fv(PointC);
        glVertex2fv(PointE);
        glVertex2fv(PointB);
        glVertex2fv(PointD);
    glEnd();
    
    glFlush();
    glutSwapBuffers();
}

#endif /* stars_h */
