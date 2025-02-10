const MergeClassnames = (...args) => {
  let classnameList = [];
  args.forEach((classname) => {
    if (!classname) {
      return;
    }

    let classnameType = typeof classname;
    if (classnameType === "string" || classnameType === "number") {
      classnameList.push(classname);
      return;
    }

    if (Array.isArray(classname)) {
      classnameList.push(MergeClassnames(...classname));
      return;
    }

    if (classname === "object") {
      for (let key in classname) {
        if (Object.hasOwn(classname, key) && classname[key]) {
          classnameList.push(key);
        }
      }
      return;
    }
  });

  return classnameList.join(" ");
};

module.exports = MergeClassnames;
