/* for use by sys-$SUBARCH/kernel-offsets.c */

DEFINE(KERNEL_MADV_REMOVE, MADV_REMOVE);
#ifdef CONFIG_MODE_TT
OFFSET(HOST_TASK_EXTERN_PID, task_struct, thread.mode.tt.extern_pid);
#endif

OFFSET(HOST_TASK_REGS, task_struct, thread.regs);
OFFSET(HOST_TASK_PID, task_struct, pid);

DEFINE(UM_KERN_PAGE_SIZE, PAGE_SIZE);
DEFINE(UM_NSEC_PER_SEC, NSEC_PER_SEC);

DEFINE_STR(UM_KERN_EMERG, KERN_EMERG);
DEFINE_STR(UM_KERN_ALERT, KERN_ALERT);
DEFINE_STR(UM_KERN_CRIT, KERN_CRIT);
DEFINE_STR(UM_KERN_ERR, KERN_ERR);
DEFINE_STR(UM_KERN_WARNING, KERN_WARNING);
DEFINE_STR(UM_KERN_NOTICE, KERN_NOTICE);
DEFINE_STR(UM_KERN_INFO, KERN_INFO);
DEFINE_STR(UM_KERN_DEBUG, KERN_DEBUG);

DEFINE(UM_ELF_CLASS, ELF_CLASS);
DEFINE(UM_ELFCLASS32, ELFCLASS32);
DEFINE(UM_ELFCLASS64, ELFCLASS64);

/* For crypto assembler code. */
DEFINE(crypto_tfm_ctx_offset, offsetof(struct crypto_tfm, __crt_ctx));
