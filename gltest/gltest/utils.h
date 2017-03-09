//
//  utils.h
//  gltest
//
//  Created by jin.li on 17/2/23.
//  Copyright © 2017年 jin.li. All rights reserved.
//

#ifndef utils_h
#define utils_h

#include <OpenGL/OpenGL.h>

#define M_PI 3.1415926

void drawCircle(float cx, float cy, float r, int num_segments)
{
    glBegin(GL_LINE_STRIP);
    for (int i = 0; i <= num_segments; i++)
    {
        glVertex2f(cx + r * cos((2 * M_PI * i) / num_segments), cy + r * sin((2 * M_PI * i) / num_segments));
    }
    glEnd();
}

#endif /* utils_h */
