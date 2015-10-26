#ifndef __MTD_H
#define __MTD_H

int mtd_write(const char *mtd, const UINT8 *data, int len);
int mtd_read(const char *mtd, const UINT8 *data, UINT32 len);

#endif
