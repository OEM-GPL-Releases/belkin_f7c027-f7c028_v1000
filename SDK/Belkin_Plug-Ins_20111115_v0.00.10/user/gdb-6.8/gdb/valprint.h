/* Declarations for value printing routines for GDB, the GNU debugger.

   Copyright (C) 1986, 1988, 1989, 1991, 1992, 1993, 1994, 2000, 2005, 2007,
   2008 Free Software Foundation, Inc.

   This file is part of GDB.

   This program is free software; you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation; either version 3 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>.  */

#ifndef VALPRINT_H
#define VALPRINT_H

extern int prettyprint_arrays;	/* Controls pretty printing of arrays.  */
extern int prettyprint_structs;	/* Controls pretty printing of structures */
extern int prettyprint_arrays;	/* Controls pretty printing of arrays.  */

extern int vtblprint;		/* Controls printing of vtbl's */
extern int unionprint;		/* Controls printing of nested unions.  */
extern int addressprint;	/* Controls pretty printing of addresses.  */
extern int objectprint;		/* Controls looking up an object's derived type
				   using what we find in its vtables.  */

extern unsigned int print_max;	/* Max # of chars for strings/vectors */

/* Flag to low-level print routines that this value is being printed
   in an epoch window.  We'd like to pass this as a parameter, but
   every routine would need to take it.  Perhaps we can encapsulate
   this in the I/O stream once we have GNU stdio. */
extern int inspect_it;

/* Print repeat counts if there are more than this many repetitions of an
   element in an array.  Referenced by the low level language dependent
   print routines. */
extern unsigned int repeat_count_threshold;

extern int output_format;

extern int stop_print_at_null;	/* Stop printing at null char? */

extern int print_array_indexes_p (void);
 
extern int get_array_low_bound (struct type *type, long *low_bound);

extern void maybe_print_array_index (struct type *index_type, LONGEST index,
                                     struct ui_file *stream, int format,
                                     enum val_prettyprint pretty);

extern void val_print_array_elements (struct type *, const gdb_byte *,
				      CORE_ADDR, struct ui_file *, int,
				      int, int, enum val_prettyprint,
				      unsigned int);

extern void val_print_type_code_int (struct type *, const gdb_byte *,
				     struct ui_file *);

extern void val_print_type_code_flags (struct type *type,
				       const gdb_byte *valaddr,
				       struct ui_file *stream);

extern void print_binary_chars (struct ui_file *, const gdb_byte *,
				unsigned int);

extern void print_octal_chars (struct ui_file *, const gdb_byte *,
			       unsigned int);

extern void print_decimal_chars (struct ui_file *, const gdb_byte *,
				 unsigned int);

extern void print_hex_chars (struct ui_file *, const gdb_byte *,
			     unsigned int);

extern void print_char_chars (struct ui_file *, const gdb_byte *,
			      unsigned int);
#endif
