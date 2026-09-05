/* @ds-bundle: {"format":4,"namespace":"WeCareThailandDesignSystem_a76b13","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/marketing/Accordion.jsx"},{"name":"BeforeAfter","sourcePath":"components/marketing/BeforeAfter.jsx"},{"name":"CTABand","sourcePath":"components/marketing/CTABand.jsx"},{"name":"CompanyCard","sourcePath":"components/marketing/CompanyCard.jsx"},{"name":"FeatureItem","sourcePath":"components/marketing/FeatureItem.jsx"},{"name":"HeroSlide","sourcePath":"components/marketing/HeroSlide.jsx"},{"name":"PhotoStrip","sourcePath":"components/marketing/PhotoStrip.jsx"},{"name":"ProcessStep","sourcePath":"components/marketing/ProcessStep.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"},{"name":"TimelineItem","sourcePath":"components/marketing/TimelineItem.jsx"},{"name":"ContactRow","sourcePath":"components/navigation/ContactRow.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"e78dbe0e61b5","components/core/Badge.jsx":"141b73bd38f2","components/core/Button.jsx":"5ef9d3aa942a","components/core/Card.jsx":"0a38dc46fc95","components/core/Eyebrow.jsx":"9d3ecf145a2c","components/core/IconTile.jsx":"c6ae3295e821","components/core/SectionHeading.jsx":"adc4de1f784e","components/forms/Checkbox.jsx":"820281acbbe9","components/forms/Input.jsx":"4da33220ad83","components/forms/Select.jsx":"af7b6708ba2e","components/forms/Textarea.jsx":"6c7ac7f3114d","components/marketing/Accordion.jsx":"863f96f8fdd3","components/marketing/BeforeAfter.jsx":"f5e99542b622","components/marketing/CTABand.jsx":"86b8ca4a7288","components/marketing/CompanyCard.jsx":"1ef5a229180d","components/marketing/FeatureItem.jsx":"e69df8f4e858","components/marketing/HeroSlide.jsx":"f84397980367","components/marketing/PhotoStrip.jsx":"d044dc98213d","components/marketing/ProcessStep.jsx":"df9ba23e40d7","components/marketing/ServiceCard.jsx":"e1cf05fa9818","components/marketing/StatBlock.jsx":"41c7bbfe0d6d","components/marketing/Testimonial.jsx":"0fbcb7301c5b","components/marketing/TimelineItem.jsx":"8c7d8b1345a2","components/navigation/ContactRow.jsx":"1d9be23e32f4","components/navigation/Footer.jsx":"19278418044b","components/navigation/NavBar.jsx":"9c013abd3e11","ui_kits/website/Contact.jsx":"cb158ae27fb3","ui_kits/website/GroupCompanies.jsx":"a1049daf1d74","ui_kits/website/Home.jsx":"8482ad99ba43","ui_kits/website/LaundryFactory.jsx":"7fb5bcaaa355","ui_kits/website/ServiceDetail.jsx":"d1b9c1d964af","ui_kits/website/Shell.jsx":"668747f658c3","ui_kits/website/data.js":"d48b7ebf03e6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WeCareThailandDesignSystem_a76b13 = window.WeCareThailandDesignSystem_a76b13 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  'thailand': 'assets/logos/wecare-thailand-horizontal.png',
  'thailand-ondark': 'assets/logos/wecare-thailand-horizontal-ondark.png',
  'thailand-stacked': 'assets/logos/wecare-thailand-stacked.png',
  'laundry-factory': 'assets/logos/wecare-laundry-factory.png',
  'vacation': 'assets/logos/wecare-vacation.png',
  'mark': 'assets/logos/wecare-w-mark.png',
  'mark-gold': 'assets/logos/wecare-w-mark-gold.png'
};
const LABEL = {
  'thailand': 'We Care Thailand',
  'thailand-ondark': 'We Care Thailand',
  'thailand-stacked': 'We Care Thailand',
  'laundry-factory': 'We Care Laundry Factory',
  'vacation': 'We Care Vacation',
  'mark': 'We Care',
  'mark-gold': 'We Care'
};
function Logo({
  variant = 'thailand',
  height = 52,
  assetBase = '',
  style,
  ...rest
}) {
  const src = (assetBase ? assetBase.replace(/\/$/, '') + '/' : '') + SRC[variant];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: LABEL[variant],
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  sage: {
    background: 'var(--sage-100)',
    color: 'var(--sage-700)'
  },
  gold: {
    background: 'var(--gold-100)',
    color: 'var(--gold-700)'
  },
  azure: {
    background: 'var(--azure-200)',
    color: 'var(--azure-700)'
  },
  neutral: {
    background: 'var(--ink-100)',
    color: 'var(--ink-700)'
  },
  solid: {
    background: 'var(--sage-400)',
    color: 'var(--white)'
  },
  onDark: {
    background: 'rgba(255,255,255,.16)',
    color: 'var(--white)'
  }
};
function Badge({
  tone = 'sage',
  icon,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...TONES[tone],
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '.04em',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-display)',
  fontWeight: 'var(--fw-medium)',
  letterSpacing: '.02em',
  borderRadius: 'var(--radius-pill)',
  border: '1px solid transparent',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'var(--transition-control), transform var(--dur-fast) var(--ease-out)'
};
const SIZES = {
  sm: {
    fontSize: 'var(--fs-caption)',
    padding: '8px 18px',
    minHeight: 36
  },
  md: {
    fontSize: 'var(--fs-body-sm)',
    padding: '12px 26px',
    minHeight: 46
  },
  lg: {
    fontSize: 'var(--fs-body)',
    padding: '15px 34px',
    minHeight: 54
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--btn-primary-bg)',
    color: 'var(--text-on-brand)'
  },
  accent: {
    background: 'var(--btn-accent-bg)',
    color: 'var(--ink-900)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--sage-700)',
    borderColor: 'var(--sage-300)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--sage-700)'
  },
  onDark: {
    background: 'var(--white)',
    color: 'var(--ink-900)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--btn-primary-bg-hover)'
  },
  accent: {
    background: 'var(--btn-accent-bg-hover)'
  },
  outline: {
    background: 'var(--sage-50)',
    borderColor: 'var(--sage-400)'
  },
  ghost: {
    background: 'var(--sage-50)'
  },
  onDark: {
    background: 'var(--ink-100)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  disabled,
  block,
  as,
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as || (href ? 'a' : 'button');
  const s = {
    ...base,
    ...SIZES[size],
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null),
    ...(press && !disabled ? {
      transform: 'scale(var(--press-scale))'
    } : null),
    ...(block ? {
      width: '100%'
    } : null),
    ...(disabled ? {
      opacity: .45,
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), icon ? /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true",
    style: {
      fontSize: '.9em'
    }
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement("i", {
    className: iconAfter,
    "aria-hidden": "true",
    style: {
      fontSize: '.9em'
    }
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  plain: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-hairline)'
  },
  tint: {
    background: 'var(--surface-tint)',
    border: '1px solid var(--border-brand)'
  },
  warm: {
    background: 'var(--surface-warm)',
    border: '1px solid var(--sand-300)'
  },
  brand: {
    background: 'var(--surface-brand)',
    border: '1px solid var(--sage-500)',
    color: 'var(--text-on-brand)'
  },
  inverse: {
    background: 'var(--surface-inverse)',
    border: '1px solid var(--ink-800)',
    color: 'var(--text-on-inverse)'
  }
};
function Card({
  tone = 'plain',
  pad = 'md',
  radius = 'lg',
  elevation = 'sm',
  interactive,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...TONES[tone],
      borderRadius: radius === 'md' ? 'var(--radius-md)' : radius === 'xl' ? 'var(--radius-xl)' : 'var(--radius-lg)',
      padding: pad === 'none' ? 0 : pad === 'sm' ? 'var(--space-4)' : pad === 'lg' ? 'var(--card-pad-lg)' : 'var(--card-pad)',
      boxShadow: elevation === 'none' ? 'none' : hover && interactive ? 'var(--shadow-md)' : `var(--shadow-${elevation})`,
      transform: hover && interactive ? 'var(--lift-hover)' : 'none',
      transition: 'var(--transition-control), transform var(--dur-base) var(--ease-out)',
      overflow: 'hidden',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  align = 'left',
  tone = 'gold',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'gold' ? 'var(--text-eyebrow)' : tone === 'sage' ? 'var(--sage-600)' : 'rgba(255,255,255,.82)',
      textAlign: align,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  sage: {
    background: 'var(--sage-100)',
    color: 'var(--sage-700)'
  },
  gold: {
    background: 'var(--gold-100)',
    color: 'var(--gold-700)'
  },
  azure: {
    background: 'var(--azure-200)',
    color: 'var(--azure-700)'
  },
  solid: {
    background: 'var(--sage-400)',
    color: 'var(--white)'
  },
  onDark: {
    background: 'rgba(255,255,255,.14)',
    color: 'var(--white)'
  }
};
function IconTile({
  icon,
  tone = 'sage',
  size = 56,
  shape = 'circle',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...TONES[tone],
      width: size,
      height: size,
      display: 'inline-grid',
      placeItems: 'center',
      borderRadius: shape === 'circle' ? 'var(--radius-circle)' : 'var(--radius-md)',
      fontSize: Math.round(size * 0.42),
      flex: '0 0 auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'default',
  level = 2,
  style,
  ...rest
}) {
  const H = 'h' + level;
  const onDark = tone === 'onDark';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: align === 'center' ? 'center' : 'start',
      textAlign: align,
      maxWidth: align === 'center' ? 'var(--container-narrow)' : 'none',
      marginInline: align === 'center' ? 'auto' : 0,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    align: align,
    tone: onDark ? 'onDark' : 'gold'
  }, eyebrow) : null, /*#__PURE__*/React.createElement(H, {
    style: {
      fontSize: 'var(--fs-display-2)',
      letterSpacing: 'var(--ls-display)',
      lineHeight: 'var(--lh-heading)',
      color: onDark ? 'var(--white)' : 'var(--text-heading)',
      maxWidth: '22ch'
    }
  }, title), intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      maxWidth: 'var(--measure-body)',
      color: onDark ? 'var(--text-on-inverse)' : 'var(--text-body)'
    }
  }, intro) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  id,
  style,
  ...rest
}) {
  const cid = id || 'cb-' + (label || '').toLowerCase().replace(/\W+/g, '-');
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cid,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (checked ? 'var(--sage-400)' : 'var(--border-strong)'),
      background: checked ? 'var(--sage-400)' : 'var(--white)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--white)',
      fontSize: 11,
      transition: 'var(--transition-control)',
      marginTop: 2
    }
  }, checked ? /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check",
    "aria-hidden": "true"
  }) : null), /*#__PURE__*/React.createElement("input", _extends({
    id: cid,
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-snug)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--text-heading)',
  background: 'var(--white)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-md)',
  padding: '13px 16px',
  width: '100%',
  transition: 'var(--transition-control)',
  outline: 'none'
};
function Input({
  label,
  hint,
  error,
  icon,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || 'in-' + (label || '').toLowerCase().replace(/\W+/g, '-');
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-heading)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, icon ? /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ink-500)',
      fontSize: 14
    }
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...shell,
      paddingLeft: icon ? 42 : shell.padding.split(' ')[1],
      borderColor: error ? 'var(--status-danger)' : focus ? 'var(--sage-400)' : 'var(--border-hairline)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      ...style
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--status-danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--text-heading)',
  background: 'var(--white)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-md)',
  padding: '13px 16px',
  width: '100%',
  transition: 'var(--transition-control)',
  outline: 'none'
};
function Select({
  label,
  options = [],
  hint,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sid = id || 'se-' + (label || '').toLowerCase().replace(/\W+/g, '-');
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-heading)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: sid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...shell,
      appearance: 'none',
      paddingRight: 44,
      borderColor: focus ? 'var(--sage-400)' : 'var(--border-hairline)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-down",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ink-500)',
      fontSize: 12,
      pointerEvents: 'none'
    }
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const shell = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--text-heading)',
  background: 'var(--white)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-md)',
  padding: '13px 16px',
  width: '100%',
  transition: 'var(--transition-control)',
  outline: 'none'
};
function Textarea({
  label,
  hint,
  rows = 5,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const tid = id || 'ta-' + (label || '').toLowerCase().replace(/\W+/g, '-');
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: tid,
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-heading)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: tid,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...shell,
      resize: 'vertical',
      lineHeight: 'var(--lh-body)',
      borderColor: focus ? 'var(--sage-400)' : 'var(--border-hairline)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      ...style
    }
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--surface-card)',
        border: '1px solid ' + (isOpen ? 'var(--border-brand)' : 'var(--border-hairline)'),
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        all: 'unset',
        boxSizing: 'border-box',
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-5) var(--space-6)',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-medium)',
        fontSize: 'var(--fs-body)',
        color: 'var(--text-heading)'
      }
    }, it.q, /*#__PURE__*/React.createElement("i", {
      className: 'fa-solid ' + (isOpen ? 'fa-minus' : 'fa-plus'),
      "aria-hidden": "true",
      style: {
        color: 'var(--sage-500)',
        fontSize: 13
      }
    })), isOpen ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--space-6) var(--space-5)',
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--text-body)',
        lineHeight: 'var(--lh-body)'
      }
    }, it.a) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/marketing/BeforeAfter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BeforeAfter({
  before,
  after,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  style,
  ...rest
}) {
  const tag = {
    position: 'absolute',
    bottom: 12,
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--fs-caption)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-eyebrow)',
    padding: '5px 14px',
    borderRadius: 'var(--radius-pill)',
    background: 'var(--ink-900)',
    color: 'var(--white)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 4,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '3 / 4',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: before,
    alt: beforeLabel,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...tag,
      left: 12
    }
  }, beforeLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '3 / 4',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: after,
    alt: afterLabel,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...tag,
      right: 12,
      background: 'var(--sage-500)'
    }
  }, afterLabel)));
}
Object.assign(__ds_scope, { BeforeAfter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/BeforeAfter.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CTABand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CTABand({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
  tone = 'brand',
  style,
  ...rest
}) {
  const dark = tone !== 'tint';
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: tone === 'brand' ? 'var(--surface-brand)' : tone === 'ink' ? 'var(--surface-inverse)' : 'var(--surface-tint)',
      padding: 'var(--section-y-tight) var(--gutter)',
      display: 'grid',
      justifyItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-5)',
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: dark ? 'onDark' : 'gold',
    align: "center"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-display-2)',
      color: dark ? 'var(--white)' : 'var(--text-heading)',
      maxWidth: '24ch',
      letterSpacing: 'var(--ls-display)'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 'var(--measure-narrow)',
      color: dark ? 'rgba(255,255,255,.9)' : 'var(--text-body)',
      fontSize: 'var(--fs-body-lg)'
    }
  }, body) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, primaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'onDark' : 'primary',
    size: "lg",
    href: primaryCta.href
  }, primaryCta.label) : null, secondaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'accent' : 'outline',
    size: "lg",
    href: secondaryCta.href
  }, secondaryCta.label) : null));
}
Object.assign(__ds_scope, { CTABand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CTABand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CompanyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CompanyCard({
  logo,
  name,
  tagline,
  meta = [],
  href,
  division,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: "plain",
    pad: "lg",
    radius: "lg",
    elevation: "sm",
    interactive: true,
    className: division ? 'wc-division-' + division : undefined,
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      alignContent: 'start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: name,
    style: {
      height: 76,
      width: 'auto',
      objectFit: 'contain',
      objectPosition: 'left'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, tagline)), meta.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check",
    "aria-hidden": "true",
    style: {
      color: 'var(--brand-accent)',
      fontSize: 11
    }
  }), m))) : null, href ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "sm",
    href: href,
    iconAfter: "fa-solid fa-arrow-right",
    style: {
      justifySelf: 'start'
    }
  }, "Learn More") : null);
}
Object.assign(__ds_scope, { CompanyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CompanyCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureItem({
  icon,
  title,
  body,
  tone = 'sage',
  layout = 'stack',
  style,
  ...rest
}) {
  const row = layout === 'row';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: row ? 'flex' : 'grid',
      gap: 'var(--space-4)',
      alignItems: row ? 'flex-start' : 'stretch',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    icon: icon,
    tone: tone,
    size: row ? 48 : 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--fs-h4)'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, body) : null));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/marketing/HeroSlide.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HeroSlide({
  image,
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
  align = 'center',
  height = 620,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      minHeight: height,
      display: 'grid',
      alignItems: 'center',
      justifyItems: align === 'center' ? 'center' : 'start',
      textAlign: align,
      padding: 'var(--space-20) var(--gutter)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-flat)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gap: 'var(--space-6)',
      justifyItems: align === 'center' ? 'center' : 'start',
      maxWidth: 780
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "onDark",
    align: align
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display-1)',
      color: 'var(--white)',
      letterSpacing: 'var(--ls-display)',
      lineHeight: 'var(--lh-tight)'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      color: 'rgba(255,255,255,.9)',
      maxWidth: 'var(--measure-narrow)',
      lineHeight: 'var(--lh-body)'
    }
  }, body) : null, primaryCta || secondaryCta ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      justifyContent: align === 'center' ? 'center' : 'flex-start'
    }
  }, primaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    href: primaryCta.href
  }, primaryCta.label) : null, secondaryCta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "onDark",
    size: "lg",
    href: secondaryCta.href
  }, secondaryCta.label) : null) : null));
}
Object.assign(__ds_scope, { HeroSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/HeroSlide.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PhotoStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PhotoStrip({
  images = [],
  height = 240,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), images.map((src, i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    style: {
      margin: 0,
      height,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))));
}
Object.assign(__ds_scope, { PhotoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PhotoStrip.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProcessStep({
  step,
  icon,
  title,
  body,
  tone = 'azure',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      justifyItems: 'start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    icon: icon,
    tone: tone,
    size: 48
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--text-muted)'
    }
  }, "STEP ", step)), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--fs-h4)'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, body) : null);
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceCard({
  image,
  title,
  body,
  href,
  cta = 'Read More',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    pad: "none",
    radius: "lg",
    elevation: "sm",
    interactive: true,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      height: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'var(--media-zoom-hover)' : 'none',
      transition: 'var(--transition-media)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      padding: 'var(--card-pad)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h3)'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, body) : null, href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: hover ? 'var(--gold-600)' : 'var(--sage-600)',
      display: 'inline-flex',
      gap: 'var(--space-2)',
      alignItems: 'center'
    }
  }, cta, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right",
    "aria-hidden": "true",
    style: {
      fontSize: 11
    }
  })) : null));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  unit,
  label,
  tone = 'sage',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-2)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      color: tone === 'gold' ? 'var(--gold-500)' : tone === 'azure' ? 'var(--azure-500)' : 'var(--sage-500)'
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-muted)'
    }
  }, unit) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Testimonial({
  quote,
  name,
  role,
  stars = 5,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: "plain",
    pad: "lg",
    radius: "lg",
    elevation: "sm",
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      color: 'var(--gold-400)',
      fontSize: 14
    }
  }, Array.from({
    length: stars
  }).map((_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    className: "fa-solid fa-star",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      color: 'var(--text-heading)',
      lineHeight: 'var(--lh-body)'
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-heading)'
    }
  }, name), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, role) : null));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TimelineItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TimelineItem({
  year,
  title,
  body,
  side = 'top',
  accent = 'gold',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      textAlign: 'left',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-bold)',
      color: accent === 'gold' ? 'var(--gold-500)' : 'var(--sage-500)',
      lineHeight: 1
    }
  }, year), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      flex: 1,
      background: 'var(--border-hairline)'
    }
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--fs-h4)'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, body) : null);
}
Object.assign(__ds_scope, { TimelineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TimelineItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ContactRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ContactRow({
  icon,
  label,
  value,
  href,
  tone = 'sage',
  style,
  ...rest
}) {
  const Body = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Body, _extends({
    href: href,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      color: 'inherit',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    icon: icon,
    tone: tone,
    size: 44
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-display)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-heading)',
      fontWeight: 'var(--fw-medium)'
    }
  }, value)));
}
Object.assign(__ds_scope, { ContactRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ContactRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const social = [{
  icon: 'fa-brands fa-facebook-f',
  label: 'Facebook',
  href: 'https://www.facebook.com/WeCareSamui/'
}, {
  icon: 'fa-brands fa-instagram',
  label: 'Instagram',
  href: 'https://www.instagram.com/wecaresamui/'
}, {
  icon: 'fa-brands fa-youtube',
  label: 'YouTube',
  href: 'https://www.youtube.com/@WecareCleaning'
}, {
  icon: 'fa-solid fa-location-dot',
  label: 'Map',
  href: 'https://maps.app.goo.gl/JCP8gq2o6ZQSb8sh6'
}];
function Footer({
  assetBase = '',
  blurb,
  columns = [],
  address,
  phone,
  email,
  style,
  ...rest
}) {
  const head = {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--fs-caption)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--white)'
  };
  const link = {
    fontSize: 'var(--fs-body-sm)',
    color: 'rgba(255,255,255,.74)',
    display: 'block',
    padding: '3px 0'
  };
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: 'wc-footer-grid',
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--gutter) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'transparent',
      borderRadius: 'var(--radius-md)',
      padding: '0',
      justifySelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "thailand-ondark",
    height: 44,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'rgba(255,255,255,.74)',
      lineHeight: 'var(--lh-body)',
      maxWidth: '34ch'
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    "aria-label": s.label,
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-circle)',
      background: 'rgba(255,255,255,.1)',
      color: 'var(--white)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 16
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--sage-500)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.1)'
  }, /*#__PURE__*/React.createElement("i", {
    className: s.icon,
    "aria-hidden": "true"
  }))))), columns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, col.title), /*#__PURE__*/React.createElement("div", null, col.links.map((l, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    href: l.href,
    style: link
  }, l.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      fontSize: 'var(--fs-body-sm)',
      color: 'rgba(255,255,255,.74)'
    }
  }, address ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-location-dot",
    "aria-hidden": "true",
    style: {
      color: 'var(--gold-400)',
      marginTop: 4
    }
  }), address) : null, phone ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone",
    "aria-hidden": "true",
    style: {
      color: 'var(--gold-400)',
      marginTop: 4
    }
  }), phone) : null, email ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      wordBreak: 'break-all'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-envelope",
    "aria-hidden": "true",
    style: {
      color: 'var(--gold-400)',
      marginTop: 4
    }
  }), email) : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-3) var(--gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      fontSize: 'var(--fs-caption)',
      color: 'rgba(255,255,255,.55)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Copyright \xA9 2026. We Care Service & Management."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'rgba(255,255,255,.55)'
    }
  }, "Privacy Policy"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  items = [],
  assetBase = '',
  activeHref,
  cta = {
    label: 'Contact',
    href: '#contact'
  },
  sticky,
  style,
  ...rest
}) {
  const [openIdx, setOpenIdx] = React.useState(-1);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      background: 'var(--white)',
      borderBottom: '1px solid var(--border-hairline)',
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 40,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: 'var(--nav-h)',
      padding: '0 var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'block',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "thailand",
    height: 48,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      marginLeft: 'auto',
      alignItems: 'center'
    }
  }, items.map((it, i) => {
    const active = it.href && it.href === activeHref;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative'
      },
      onMouseEnter: () => setOpenIdx(i),
      onMouseLeave: () => setOpenIdx(-1)
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href,
      onClick: it.onClick,
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 'var(--fw-medium)',
        color: active ? 'var(--sage-600)' : 'var(--ink-800)',
        display: 'inline-flex',
        gap: 6,
        alignItems: 'center',
        paddingBlock: 8,
        borderBottom: '2px solid ' + (active ? 'var(--gold-400)' : 'transparent')
      }
    }, it.label, it.children ? /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-chevron-down",
      "aria-hidden": "true",
      style: {
        fontSize: 9
      }
    }) : null), it.children && openIdx === i ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '100%',
        left: -16,
        minWidth: 268,
        background: 'var(--white)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-md)',
        padding: 'var(--space-2)',
        display: 'grid'
      }
    }, it.children.map((c, j) => /*#__PURE__*/React.createElement("a", {
      key: j,
      href: c.href,
      onClick: c.onClick,
      style: {
        padding: '10px 14px',
        borderRadius: 'var(--radius-sm)',
        fontSize: 'var(--fs-body-sm)',
        color: 'var(--ink-700)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = 'var(--sage-50)';
        e.currentTarget.style.color = 'var(--sage-700)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--ink-700)';
      }
    }, c.label))) : null);
  }), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    href: cta.href,
    onClick: cta.onClick
  }, cta.label) : null)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  SectionHeading,
  Card,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  ContactRow,
  Badge,
  Accordion
} = window.WeCareThailandDesignSystem_a76b13 || {};
const D = window.WC_DATA;
function Contact({
  go
}) {
  const [sent, setSent] = React.useState(false);
  const [consent, setConsent] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "tint",
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact",
    title: "Ready to experience the difference?",
    intro: "Contact We Care Ultimate Services today to schedule your appointment or request more information about our services. Alternatively, fill out the form and one of our friendly team members will be in touch with you shortly."
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    radius: "lg",
    elevation: "sm"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'start',
      padding: 'var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sage",
    icon: "fa-solid fa-check"
  }, "Message sent"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h2)'
    }
  }, "Thank you \u2014 we will be in touch shortly."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)'
    }
  }, "A member of our Koh Samui team will reply within one working day, in English or Thai."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Send another enquiry")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Somchai P.",
    icon: "fa-solid fa-user",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    icon: "fa-solid fa-envelope",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "+66",
    icon: "fa-solid fa-phone"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Service",
    options: ['Deep Cleaning', 'Carpet Cleaning', 'Upholstery Cleaning', 'Mattress Cleaning', 'Window Cleaning', 'Floor & Surface Workshop', 'Laundry Factory', 'Property Management', 'Karcher machinery']
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "How can we help?",
    rows: 5,
    placeholder: "Tell us about your property, the areas involved and your preferred dates\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me a free quotation",
    checked: consent,
    onChange: () => setConsent(!consent)
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    style: {
      justifySelf: 'start'
    }
  }, "Send enquiry"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ContactRow, {
    icon: "fa-solid fa-location-dot",
    label: "We Care Service & Management",
    value: "12/29 Moo 1, Maenam, Koh Samui, Surat Thani, 84330"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "fa-solid fa-phone",
    label: "Phone",
    value: "+66 92 272 8997",
    tone: "gold",
    href: "tel:+66922728997"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "contact.samui@wecareservice-management.com",
    tone: "gold",
    href: "mailto:contact.samui@wecareservice-management.com"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "fa-solid fa-shirt",
    label: "We Care Laundry Factory",
    value: "11/39 Moo 4, Lipa Noi \xB7 +66 64 931 3882",
    tone: "azure"
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    pad: "lg",
    elevation: "none",
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)'
    }
  }, "Owner questions"), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: 0,
    items: [{
      q: 'Will you arrange cleaning and linen, and who pays?',
      a: 'The cleaning fee is charged when the guest confirms the reservation and is the guest’s responsibility. Cleaning runs every 4-day stay, with bedsheets changed every 7-day stay.'
    }, {
      q: 'How are payments handled?',
      a: 'We collect guests’ accommodation payments, prepare a monthly report with bookings, maintenance jobs and upcoming reservations, deduct our commission and transfer the balance to your account.'
    }, {
      q: 'Who handles maintenance?',
      a: 'Our maintenance team handles day-to-day work; specialists are called in when an issue requires them.'
    }]
  }))))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GroupCompanies.jsx
try { (() => {
const {
  SectionHeading,
  CompanyCard,
  TimelineItem,
  Card,
  IconTile,
  CTABand,
  Eyebrow,
  Logo
} = window.WeCareThailandDesignSystem_a76b13 || {};
const D = window.WC_DATA;
function GroupCompanies({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "tint",
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "We Care Group",
    title: "One green, many accents",
    intro: "Since its establishment in 2019, We Care has grown from a single cleaning company into a group covering ultimate cleaning services, an authorised K\xE4rcher dealership, industrial laundry and villa property management."
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, D.companies.map(c => /*#__PURE__*/React.createElement(CompanyCard, {
    key: c.name,
    logo: D.L + c.logo,
    name: c.name,
    division: c.division,
    tagline: c.tagline,
    meta: c.meta,
    href: "#",
    style: {
      height: '100%'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint",
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Regional Expansion",
    title: "Bangkok \xB7 Phuket \xB7 Hua Hin",
    intro: "Each region keeps the group's sage green at 60% and its near-black at 10%, and changes only the 30% accent \u2014 exactly as set out in the 2026 corporate colour sheet."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)',
      marginTop: 'var(--space-10)'
    }
  }, D.regions.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.name,
    pad: "none",
    radius: "lg",
    elevation: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: r.accent
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--card-pad-lg)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    height: 44,
    assetBase: "../.."
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)'
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, r.note))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, "The regional companies have lockups and palettes but no published copy yet \u2014 left deliberately sparse.")), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Timeline Story",
    title: "From a humble beginning to regional expansion"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--space-8)',
      marginTop: 'var(--space-12)'
    }
  }, D.timeline.map(([y, t, b], i) => /*#__PURE__*/React.createElement(TimelineItem, {
    key: y,
    year: y,
    title: t,
    body: b,
    accent: i % 2 ? 'sage' : 'gold'
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "All About Us",
    title: "Six values, one promise",
    intro: "Not only cleaning but also caring \u2014 care that comes to your residents."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)',
      marginTop: 'var(--space-10)'
    }
  }, D.values.map(([t, b], i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    pad: "lg",
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    icon: ['fa-solid fa-heart', 'fa-solid fa-award', 'fa-solid fa-hand-holding-heart', 'fa-solid fa-bolt', 'fa-solid fa-handshake', 'fa-solid fa-seedling'][i],
    tone: i % 2 ? 'gold' : 'sage',
    size: 48
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, b))))), /*#__PURE__*/React.createElement(CTABand, {
    tone: "ink",
    eyebrow: "Our Customers",
    title: "Trusted by the island's hospitality",
    body: "More than thirty hotels, resorts and villa operators across Koh Samui rely on We Care for cleaning, linen and property care. Client marks are held in the company profile and shown only with permission.",
    primaryCta: {
      label: 'Contact Us',
      href: '#contact'
    }
  }));
}
Object.assign(window, {
  GroupCompanies
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GroupCompanies.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  HeroSlide,
  SectionHeading,
  ServiceCard,
  FeatureItem,
  Testimonial,
  CTABand,
  PhotoStrip,
  Card,
  Button,
  Badge,
  IconTile
} = window.WeCareThailandDesignSystem_a76b13 || {};
const D = window.WC_DATA;
function HeroRotator({
  go
}) {
  const [i, setI] = React.useState(0);
  const s = D.heroSlides[i];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(HeroSlide, {
    height: 620,
    image: D.P + s.image,
    eyebrow: s.eyebrow,
    title: s.title,
    body: s.body,
    primaryCta: {
      label: 'Our Services',
      href: '#services'
    },
    secondaryCta: {
      label: 'Contact Us',
      href: '#contact'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 28,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: 10
    }
  }, D.heroSlides.map((_, j) => /*#__PURE__*/React.createElement("button", {
    key: j,
    "aria-label": 'Slide ' + (j + 1),
    onClick: () => setI(j),
    style: {
      all: 'unset',
      cursor: 'pointer',
      width: j === i ? 30 : 10,
      height: 10,
      borderRadius: 999,
      background: j === i ? 'var(--gold-400)' : 'rgba(255,255,255,.55)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }))));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroRotator, {
    go: go
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, D.pillars.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.key,
    pad: "none",
    radius: "lg",
    elevation: "sm",
    interactive: true,
    onClick: () => go(p.key),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 190
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: D.P + p.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      position: 'absolute',
      left: 20,
      bottom: 16,
      color: 'var(--white)',
      fontSize: 'var(--fs-h4)'
    }
  }, p.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--sage-600)'
    }
  }, "Read More"), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right",
    style: {
      color: 'var(--gold-500)',
      fontSize: 12
    }
  })))))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "About Us",
    title: "Your premier partner for Cleaning Solutions and Property Management",
    intro: "At We Care Ultimate Services, we pride ourselves on being your premier destination for premium cleaning solutions and property management services in Koh Samui. With a dedicated team of Thai-speaking professionals fluent in English and equipped with high-end cleaning solutions and tools, we are committed to delivering exceptional results that exceed your expectations."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Established 2019"), /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    icon: "fa-solid fa-certificate"
  }, "Authorised K\xE4rcher dealer"), /*#__PURE__*/React.createElement(Badge, {
    tone: "azure"
  }, "10+ tons of linen / day")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconAfter: "fa-solid fa-arrow-right",
    onClick: () => go('about')
  }, "About Us")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: D.P + 'team-group.png',
    alt: "",
    style: {
      gridColumn: '1 / -1',
      height: 210,
      width: '100%',
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: D.P + 'team-at-work.png',
    alt: "",
    style: {
      height: 180,
      width: '100%',
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: D.P + 'laundry-hall.png',
    alt: "",
    style: {
      height: 180,
      width: '100%',
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    id: "services"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Our Services",
    title: "A Multi Tasks Team"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)',
      marginTop: 'var(--space-12)'
    }
  }, D.multiTask.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.title,
    tone: "plain",
    pad: "lg",
    radius: "lg",
    elevation: "sm",
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    icon: m.icon,
    tone: "sage",
    size: 56
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h3)'
    }
  }, m.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, m.body), /*#__PURE__*/React.createElement("a", {
    href: "#services",
    onClick: e => {
      e.preventDefault();
      go('services');
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, "Learn More \u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)',
      marginTop: 'var(--space-16)'
    }
  }, D.serviceList.slice(0, 6).map(s => /*#__PURE__*/React.createElement("div", {
    key: s.key,
    onClick: () => go(s.key),
    style: {
      cursor: 'pointer',
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    image: D.P + s.image,
    title: s.title,
    body: s.body,
    href: '#' + s.key
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint",
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "We care service and management",
    title: "Live in a Clean & Fresh Atmosphere"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(PhotoStrip, {
    height: 220,
    images: ['upholstery-sofa.png', 'linen-folded.png', 'floor-surface.png', 'karcher-scrubber.png', 'mattress-cleaning.png'].map(n => D.P + n)
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Why Choose Us",
    title: "We Care",
    intro: "Whether you are in need of cleaning services for your home or office, seeking comprehensive property management solutions for your holiday rental, or looking to invest in top-quality Karcher cleaning machinery, We Care Ultimate Services has got you covered."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, D.whyUs.map(f => /*#__PURE__*/React.createElement(FeatureItem, {
    key: f.title,
    icon: f.icon,
    title: f.title,
    body: f.body
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint",
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Testimonials",
    title: "Reviews From Our Customers"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "Reliable, on time and thorough. Our linens come back to hotel standard every single week.",
    name: "Boutique resort, Bophut",
    role: "Housekeeping manager"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "They took the hassle out of our holiday rental \u2014 from guest check-in to the monthly report.",
    name: "Villa owner, Maenam",
    role: "Property owner"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "The floor restoration saved us replacing the marble entirely. Minimum disruption, maximum benefit.",
    name: "Serviced apartments, Chaweng",
    role: "Building manager"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "Placeholder reviews \u2014 the live site pulls real Google reviews into this band.")), /*#__PURE__*/React.createElement(CTABand, {
    eyebrow: "Get Started",
    title: "Let\u2019s Make Your Premises a Better Place",
    body: "Explore our range of services and contact us to schedule your appointment or request more information. We look forward to serving you!",
    primaryCta: {
      label: 'Our Services',
      href: '#services'
    },
    secondaryCta: {
      label: 'Contact Us',
      href: '#contact'
    }
  }));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LaundryFactory.jsx
try { (() => {
const {
  SectionHeading,
  StatBlock,
  ProcessStep,
  Card,
  Button,
  Logo,
  CTABand,
  Badge,
  Eyebrow
} = window.WeCareThailandDesignSystem_a76b13 || {};
const D = window.WC_DATA;
function LaundryFactory({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wc-division-laundry"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 460,
      display: 'grid',
      alignItems: 'center',
      padding: 'var(--space-20) var(--gutter)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: D.P + 'laundry-hall.png',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-flat)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      width: '100%',
      display: 'grid',
      gap: 'var(--space-6)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--white)',
      padding: 'var(--space-4) var(--space-5)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "laundry-factory",
    height: 72,
    assetBase: "../.."
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'var(--white)',
      fontSize: 'var(--fs-display-1)',
      letterSpacing: 'var(--ls-display)',
      lineHeight: 'var(--lh-tight)',
      maxWidth: '20ch'
    }
  }, "Reliable laundry capacity, built for luxury hospitality"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.9)',
      fontSize: 'var(--fs-body-lg)',
      maxWidth: 'var(--measure-narrow)'
    }
  }, "We Care Laundry Factory specializes in industrial-scale laundry services, catering to hotels, villas, restaurants, spas and serviced apartments."), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => go('contact')
  }, "Request a collection"))), /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "azure",
    value: "10",
    unit: "tons/day",
    label: "Linen processed at the Lipa Noi factory"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "azure",
    value: "140",
    unit: "KVA",
    label: "Diesel backup generator with automatic ATS"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "azure",
    value: "7",
    unit: "steps",
    label: "From collection to feedback, every batch"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "azure",
    value: "Free",
    label: "Delivery within the Koh Samui area"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Working Process",
    title: "Seven steps, every batch",
    intro: "Our industrial laundry facility is fully equipped to handle high-volume linen processing, including hotel linens, banquet fabrics, spa and fitness towels. We deliver high-standard cleaning with sterilization, ensuring hygiene and safety for every piece."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-8)',
      marginTop: 'var(--space-12)'
    }
  }, D.laundrySteps.map((s, i) => /*#__PURE__*/React.createElement(ProcessStep, {
    key: s.title,
    step: i + 1,
    icon: s.icon,
    title: s.title,
    body: s.body,
    tone: "azure"
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Linen logistics & sustainability"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-display-2)',
      letterSpacing: 'var(--ls-display)'
    }
  }, "Efficient handling. Responsible operations."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)',
      maxWidth: 'var(--measure-body)'
    }
  }, "We use reusable laundry bags throughout the pickup and delivery process. These durable bags help reduce single-use plastics while ensuring efficient handling and protection of customer linens during transit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "azure"
  }, "Room linens"), /*#__PURE__*/React.createElement(Badge, {
    tone: "azure"
  }, "Spa & fitness"), /*#__PURE__*/React.createElement(Badge, {
    tone: "azure"
  }, "Restaurant"), /*#__PURE__*/React.createElement(Badge, {
    tone: "azure"
  }, "Banquet"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: D.P + 'laundry-bags.png',
    alt: "",
    style: {
      width: '100%',
      height: 230,
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: D.P + 'linen-folded.png',
    alt: "",
    style: {
      width: '100%',
      height: 230,
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: D.P + 'laundry-ironer.png',
    alt: "",
    style: {
      gridColumn: '1 / -1',
      width: '100%',
      height: 200,
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "tint",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)'
    }
  }, "Dependable backup power"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, "A 140 KVA generator (Ricardo R4105ZD, diesel, automatic ATS) keeps operations running through power outages so linens are delivered on time.")), /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)'
    }
  }, "Integrated water management"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, "Raw water treatment, in-process quality control and wastewater treatment before discharge into designated retention areas.")), /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)'
    }
  }, "A strong chemical partner"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, "Premium-grade, industry-recognised chemical solutions for cleaning efficacy, disinfection and fabric care \u2014 safe for sensitive skin.")))), /*#__PURE__*/React.createElement(CTABand, {
    eyebrow: "We Care Laundry Factory",
    title: "Free delivery across Koh Samui",
    body: "11/39 Moo 4, Lipa Noi, Koh Samui, Surat Thani 84140 \xB7 +66 (0) 64 931 3882",
    primaryCta: {
      label: 'Contact Us',
      href: '#contact'
    }
  }));
}
Object.assign(window, {
  LaundryFactory
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LaundryFactory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceDetail.jsx
try { (() => {
const {
  SectionHeading,
  BeforeAfter,
  Button,
  Card,
  IconTile,
  CTABand,
  Eyebrow,
  Badge
} = window.WeCareThailandDesignSystem_a76b13 || {};
const D = window.WC_DATA;
function ServiceDetail({
  serviceKey,
  go
}) {
  const s = D.services[serviceKey] || D.services.carpet;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 340,
      display: 'grid',
      alignItems: 'end',
      padding: 'var(--space-16) var(--gutter) var(--space-12)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: D.P + s.hero,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-flat)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      width: '100%',
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "Cleaning Services"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: 'var(--white)',
      fontSize: 'var(--fs-display-2)',
      letterSpacing: 'var(--ls-display)'
    }
  }, s.title))), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr .75fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    icon: s.icon,
    tone: "sage",
    size: 56
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)'
    }
  }, s.lead)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      maxWidth: 'var(--measure-body)'
    }
  }, s.body), s.note ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      color: 'var(--sage-700)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)'
    }
  }, s.note) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "See the difference"), /*#__PURE__*/React.createElement(BeforeAfter, {
    before: D.P + s.before,
    after: D.P + s.after,
    style: {
      maxWidth: 520
    }
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    pad: "lg",
    radius: "lg",
    elevation: "none",
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      position: 'sticky',
      top: 'calc(var(--nav-h) + 24px)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)'
    }
  }, "All cleaning services"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)'
    }
  }, D.serviceList.map(x => /*#__PURE__*/React.createElement("a", {
    key: x.key,
    href: '#' + x.key,
    onClick: e => {
      e.preventDefault();
      go(x.key);
    },
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '11px 14px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--fs-body-sm)',
      background: x.key === serviceKey ? 'var(--white)' : 'transparent',
      color: x.key === serviceKey ? 'var(--sage-700)' : 'var(--ink-700)',
      fontWeight: x.key === serviceKey ? 'var(--fw-medium)' : 'var(--fw-regular)'
    }
  }, x.title, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right",
    style: {
      fontSize: 10,
      color: 'var(--gold-500)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-brand)',
      paddingTop: 'var(--space-5)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    icon: "fa-solid fa-file-invoice-dollar"
  }, "Free quotation"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    onClick: () => go('contact')
  }, "Contact Us"))))), /*#__PURE__*/React.createElement(CTABand, {
    tone: "tint",
    eyebrow: "Get Started",
    title: "Let\u2019s Make Your Premises a Better Place",
    body: "Explore our range of services and contact us to schedule your appointment or request more information.",
    primaryCta: {
      label: 'Contact Us',
      href: '#contact'
    }
  }));
}
Object.assign(window, {
  ServiceDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const {
  NavBar,
  Footer
} = window.WeCareThailandDesignSystem_a76b13 || {};
const D = window.WC_DATA;
function Shell({
  page,
  go,
  children
}) {
  const items = D.nav.map(it => ({
    label: it.label,
    href: '#' + it.key,
    onClick: e => {
      e.preventDefault();
      go(it.key);
    },
    children: it.children && it.children.map(c => ({
      label: c.label,
      href: '#' + c.key,
      onClick: e => {
        e.preventDefault();
        go(c.key);
      }
    }))
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    sticky: true,
    assetBase: "../..",
    items: items,
    activeHref: '#' + page,
    cta: {
      label: 'Contact',
      href: '#contact',
      onClick: e => {
        e.preventDefault();
        go('contact');
      }
    }
  }), /*#__PURE__*/React.createElement("main", null, children), /*#__PURE__*/React.createElement(Footer, {
    assetBase: "../..",
    blurb: "We Care Service & Management, your trusted company in Koh Samui for Cleaning Services, Karcher and Villa Rentals Services.",
    columns: D.footerColumns,
    address: "12/29 Moo 1, Maenam, Koh Samui, Surat Thani, 84330",
    phone: "+66 92 272 8997",
    email: "contact.samui@wecareservice-management.com"
  }));
}
function Section({
  tone = 'page',
  tight,
  children,
  id
}) {
  const bg = tone === 'tint' ? 'var(--surface-tint)' : tone === 'card' ? 'var(--white)' : 'var(--surface-page)';
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      padding: (tight ? 'var(--section-y-tight)' : 'var(--section-y)') + ' var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, children));
}
Object.assign(window, {
  Shell,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.WC_DATA = {
  P: '../../assets/photography/',
  L: '../../assets/logos/',
  nav: [{
    key: 'services',
    label: 'Cleaning Services',
    children: [{
      key: 'supplies',
      label: 'Cleaning Supplies'
    }, {
      key: 'carpet',
      label: 'Carpet Cleaning'
    }, {
      key: 'upholstery',
      label: 'Upholstery Cleaning'
    }, {
      key: 'mattress',
      label: 'Mattress Cleaning'
    }, {
      key: 'window',
      label: 'Window Cleaning'
    }, {
      key: 'floor',
      label: 'Floor and Surface Cleaning Workshop'
    }]
  }, {
    key: 'laundry',
    label: 'Laundry Factory'
  }, {
    key: 'karcher',
    label: 'Karcher Authorized Dealer'
  }, {
    key: 'group',
    label: 'We Care Group'
  }, {
    key: 'about',
    label: 'About Us'
  }],
  footerColumns: [{
    title: 'Menu',
    links: [{
      label: 'Cleaning Services'
    }, {
      label: 'Laundry Factory'
    }, {
      label: 'Karcher Authorized Dealer'
    }, {
      label: 'Property Management'
    }]
  }, {
    title: 'Company',
    links: [{
      label: 'Our Villas'
    }, {
      label: 'About Us'
    }, {
      label: 'Our Brochure'
    }, {
      label: 'Contact'
    }]
  }],
  heroSlides: [{
    image: 'team-at-work.png',
    eyebrow: 'We Care Service & Management',
    title: 'We Care Cleaning & Retail Shop',
    body: 'At We Care Ultimate Services, we pride ourselves on being your premier destination for premium cleaning services in Koh Samui.'
  }, {
    image: 'laundry-hall.png',
    eyebrow: 'We Care Laundry Factory',
    title: 'Laundry Factory',
    body: 'We Care Laundry Factory specializes in industrial-scale laundry services, catering to hotels, villas, restaurants, spas and serviced apartments.'
  }, {
    image: 'karcher-vacuum.png',
    eyebrow: 'Authorised Dealer',
    title: 'Karcher Authorized Dealer',
    body: 'We Care Karcher Authorized Dealer, your premier destination for Karcher cleaning machinery in Koh Samui, Thailand.'
  }, {
    image: 'team-group.png',
    eyebrow: 'Property Management',
    title: 'Property Management',
    body: 'At We Care Ultimate Services, we pride ourselves on being your premier destination for premium property management services in Koh Samui.'
  }],
  pillars: [{
    key: 'services',
    image: 'team-carpet-machine.png',
    title: 'Cleaning Services'
  }, {
    key: 'laundry',
    image: 'laundry-ironer.png',
    title: 'Laundry Factory'
  }, {
    key: 'karcher',
    image: 'karcher-scrubber.png',
    title: 'Karcher Dealer'
  }, {
    key: 'group',
    image: 'facility-exterior.png',
    title: 'Property Management'
  }],
  multiTask: [{
    icon: 'fa-solid fa-spray-can-sparkles',
    title: 'Quality Cleaning Products',
    body: 'Discover premium cleaning solutions at We Care Ultimate Services in Koh Samui. From top-tier Karcher machinery to eco-friendly products, we ensure the highest standard of cleanliness for your space.'
  }, {
    icon: 'fa-solid fa-house',
    title: 'Hassle-Free Management',
    body: 'Trust us for comprehensive villa management in Koh Samui. Our team specializes in maximizing the potential of your property, from efficient maintenance to guest services.'
  }, {
    icon: 'fa-solid fa-language',
    title: 'Multi Languages',
    body: 'Experience exceptional service with We Care Ultimate Services, where language is never a barrier. Our multi-lingual team ensures clear communication in English, Thai, and more.'
  }],
  whyUs: [{
    icon: 'fa-solid fa-users',
    title: 'Dedicated Team',
    body: 'Our team is dedicated to offer to our clients the best services.'
  }, {
    icon: 'fa-solid fa-screwdriver-wrench',
    title: 'Great Tools',
    body: 'We are equipped with the best tools of the market.'
  }, {
    icon: 'fa-solid fa-file-invoice-dollar',
    title: 'Free Quotation',
    body: 'Feel free to contact us to get your free quotation.'
  }, {
    icon: 'fa-solid fa-clock',
    title: '24/7 Availability',
    body: 'Our team is available everyday of the week.'
  }],
  services: {
    carpet: {
      title: 'Carpet Cleaning',
      icon: 'fa-solid fa-rug',
      hero: 'carpet-cleaning.png',
      lead: 'Bring life back to your carpets with our expert care.',
      body: 'We use advanced cleaning methods and gentle, eco-friendly products to remove deep-seated dirt, stains, and allergens—restoring softness, color, and freshness. Whether it is a beloved rug at home or high-traffic carpet in the office, we treat every piece with the attention it deserves.',
      note: 'Because a cleaner carpet means a healthier, cozier space.',
      before: 'carpet-cleaning.png',
      after: 'team-carpet-machine.png'
    },
    upholstery: {
      title: 'Upholstery Cleaning',
      icon: 'fa-solid fa-couch',
      hero: 'upholstery-sofa.png',
      lead: 'Upholstery Cleaning – Refresh with Care',
      body: 'Bring back the comfort and charm of your furniture with our professional upholstery cleaning service. Whether it is fabric or leather, our experienced team gently removes stains, dust, and built-up grime—restoring the natural look and feel of your favorite pieces.',
      note: 'Because your furniture deserves to feel as good as it looks.',
      before: 'upholstery-sofa.png',
      after: 'team-at-work.png'
    },
    mattress: {
      title: 'Mattress Cleaning',
      icon: 'fa-solid fa-bed',
      hero: 'mattress-cleaning.png',
      lead: 'Transform your mattress with our professional cleaning service.',
      body: 'Equipped with the most advanced water extractors and eco-friendly solutions, our steam cleaning method effectively removes a range of stains from the mattress. Our professional mattress treatment service also ensures your bed is clean from pests or other nasty things.',
      note: 'Let us refresh your mattress and enhance your space with a cleaner, healthier environment.',
      before: 'mattress-cleaning.png',
      after: 'linen-folded.png'
    },
    window: {
      title: 'Window Cleaning',
      icon: 'fa-solid fa-window-maximize',
      hero: 'glass-cleaning.png',
      lead: 'Enjoy crystal-clear views with our professional window cleaning service.',
      body: 'Using specialized equipment and techniques, we will remove dirt, streaks, and smudges from your windows, leaving them gleaming and spotless.',
      note: '',
      before: 'glass-cleaning.png',
      after: 'team-at-work.png'
    },
    floor: {
      title: 'Floor and Surface Cleaning Workshop',
      icon: 'fa-solid fa-layer-group',
      hero: 'floor-surface.png',
      lead: 'Transform your floors without the cost of replacement!',
      body: 'Join our specialized workshops and learn professional skills to restore and maintain a wide variety of surfaces, including marble, terrazzo, stone, wood, and more. Our sessions provide hands-on training with state-of-the-art equipment, advanced cleaning and restoration techniques, and industry-leading products.',
      note: 'Learn the art of applying premium polishes to create a high-gloss finish that combines elegance with excellent slip resistance.',
      before: 'floor-surface.png',
      after: 'glass-cleaning.png'
    },
    supplies: {
      title: 'Cleaning Supplies',
      icon: 'fa-solid fa-spray-can-sparkles',
      hero: 'karcher-vacuum.png',
      lead: 'Keep Your Spaces Sparkling with Our Premium Cleaning Supplies!',
      body: 'Discover a wide range of high-quality cleaning products designed to make every surface shine. Whether you are maintaining a home, office, or industrial space, our cleaning supplies are formulated to deliver exceptional results.',
      note: 'Simplify your cleaning routine and achieve professional-level results effortlessly.',
      before: 'karcher-vacuum.png',
      after: 'karcher-scrubber.png'
    },
    karcher: {
      title: 'Karcher Authorized Dealer',
      icon: 'fa-solid fa-screwdriver-wrench',
      hero: 'karcher-scrubber.png',
      lead: 'Your premier destination for Karcher cleaning machinery in Koh Samui.',
      body: 'We Care is an authorized dealer of premium cleaning equipment from leading brands. From Home & Garden devices for use around the home to Professional commercial and industrial cleaning equipment, we strive to ensure that our clients receive only the best products and services.',
      note: '',
      before: 'karcher-vacuum.png',
      after: 'karcher-scrubber.png'
    }
  },
  serviceList: [{
    key: 'supplies',
    title: 'Cleaning Supplies',
    image: 'karcher-vacuum.png',
    body: 'Effective cleaners, eco-friendly options, specialized products and durable tools.'
  }, {
    key: 'carpet',
    title: 'Carpet Cleaning',
    image: 'carpet-cleaning.png',
    body: 'Restore the beauty and freshness of your carpets with advanced techniques and eco-friendly products.'
  }, {
    key: 'upholstery',
    title: 'Upholstery Cleaning',
    image: 'upholstery-sofa.png',
    body: 'Give your furniture a new lease on life, whether it is fabric or leather.'
  }, {
    key: 'mattress',
    title: 'Mattress Cleaning',
    image: 'mattress-cleaning.png',
    body: 'Advanced water extractors, steam cleaning and eco-friendly solutions.'
  }, {
    key: 'window',
    title: 'Window Cleaning',
    image: 'glass-cleaning.png',
    body: 'Crystal-clear views, free of dirt, streaks and smudges.'
  }, {
    key: 'floor',
    title: 'Floor & Surface Workshop',
    image: 'floor-surface.png',
    body: 'Restore marble, terrazzo, stone and wood — and learn how in our workshops.'
  }],
  laundrySteps: [{
    icon: 'fa-solid fa-truck',
    title: 'Pick up',
    body: 'We schedule the time to pick up the linens from the customer’s location.'
  }, {
    icon: 'fa-solid fa-layer-group',
    title: 'Sorting',
    body: 'Linen are sorted by type (colour / stain / damage) upon arrival.'
  }, {
    icon: 'fa-solid fa-soap',
    title: 'Washing and Drying',
    body: 'Linen are washed and dried using appropriate methods.'
  }, {
    icon: 'fa-solid fa-fire-burner',
    title: 'Ironing and Folding',
    body: 'Linen are carefully ironed and folded.'
  }, {
    icon: 'fa-solid fa-box-open',
    title: 'Checking and Packaging',
    body: 'Linen is checked and packed, prepared for delivery.'
  }, {
    icon: 'fa-solid fa-truck-fast',
    title: 'Delivery',
    body: 'Cleaned linen are delivered back to the customer.'
  }, {
    icon: 'fa-solid fa-comments',
    title: 'Follow-Up & Feedback',
    body: 'We follow up to gather feedback from the customer.'
  }],
  companies: [{
    logo: 'wecare-thailand-horizontal.png',
    name: 'We Care Service and Management Co., Ltd.',
    tagline: 'Ultimate cleaning services, the Kärcher authorised dealership and retail shop, and full villa property management.',
    meta: ['12/29 Moo 1, Maenam, Koh Samui', 'Authorised Kärcher dealer', 'Established 2019'],
    height: 54
  }, {
    logo: 'wecare-laundry-factory.png',
    name: 'We Care Laundry Factory Co., Ltd.',
    division: 'laundry',
    tagline: 'Industrial-scale laundry for hotels, villas, restaurants, spas and serviced apartments across Koh Samui.',
    meta: ['11/39 Moo 4, Lipa Noi, Koh Samui', 'Over 10 tons of linen per day', '140 KVA backup generator'],
    height: 76
  }, {
    logo: 'wecare-vacation.png',
    name: 'We Care Vacation',
    tagline: 'Holiday rental and guest services for owners who want complete peace of mind.',
    meta: ['Chaweng Noi, Lamai, Bophut, Maenam', 'Monthly owner reporting'],
    height: 76
  }],
  regions: [{
    name: 'We Care Bangkok',
    accent: 'var(--gold-400)',
    note: 'Brass accent · 30%'
  }, {
    name: 'We Care Phuket',
    accent: 'var(--azure-500)',
    note: 'Azure accent · 30%'
  }, {
    name: 'We Care Hua Hin',
    accent: 'var(--sun-400)',
    note: 'Sun accent · 30%'
  }],
  values: [['Wholeheartedness', 'Showing complete sincerity and commitment to our stakeholders.'], ['Excellence', 'Always looking to provide the best quality experience with regards to our services.'], ['Caring', 'A duty of care for our stakeholders and the environment.'], ['Agility', 'Ability to think and understand our stakeholders enthusiastically.'], ['Responsibility and Respect', 'Acting with integrity, and taking time to value each person.'], ['Evolution', 'Engaging in constant development and innovation to be one of the industry leaders.']],
  timeline: [['2019', 'A Humble Beginning', 'We started our journey with a passion to provide reliable cleaning and property management services.'], ['2021', 'Making Ourselves Known', 'We began introducing our brand through marketing, sharing what we do and why we care.'], ['2023', 'Expanding Our Reach', 'We opened our first retail space and welcomed new partnerships to grow together.'], ['2024', 'New Milestones, Growing Family', 'Our group grew with a new company, launched our official website and refreshed our brand identity.'], ['2026', 'Regional Expansion', 'Bangkok, Phuket and Hua Hin join the group with their own identities.']]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.BeforeAfter = __ds_scope.BeforeAfter;

__ds_ns.CTABand = __ds_scope.CTABand;

__ds_ns.CompanyCard = __ds_scope.CompanyCard;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.HeroSlide = __ds_scope.HeroSlide;

__ds_ns.PhotoStrip = __ds_scope.PhotoStrip;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.TimelineItem = __ds_scope.TimelineItem;

__ds_ns.ContactRow = __ds_scope.ContactRow;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
