/**
 * ? Directory Tree
 * ? ==============
 *
 *
 * TODO: [Instruction]
 * there is a list of folders and files. Each folder/file has a parent which states that the folder/file is in another folder. 
 * If it doesn't have a parent, then the folder/ file is in the root. From the list of folders and files, form a directory tree so that all folder and file names can be seen easily.
 * the function takes one number input (i) and returns array/vector as output, if there is no item to be returned, it will give empty array instead.
 *
 * TODO: [Rules]
 * 1. Function Description 
 * Complete the solution function in the editor below. solution has the following parameter(s). 
 * files: an array of files
 * directories: an array of directories
 * Input Format
 * A Directory is a 2D array of string consist of [id, name, parent_id]
 * A file is a 2D array of string consist of [id, name, parent_id]
 * sample input
 * ? First param
 * [
 *  ["1", "todo list.txt",""],
 *  ["2", "diary.txt","1"],
 *  ["3","diary.txt","2"],
 *  ["4","death note.txt", "3"]
 * ]
 * 
 * ? Second Param
 * [
 *  ["1","monday",""],
 *  ["2","tuesday",""],
 *  ["3","secret","1"]
 * ]
 * 
 * ? Sample Output
 * |-----monday
 * |     |-----diary.txt
 * |     |-----secret
 * |     |     |-----diary.txt
 * |-----todo list.txt
 * |____thuesday
 * |-----diary.txt

 * function solution(files, directories) {
 *   put your code
 *  }
 */

function solution(files, directories) {
  const root = { name: "", children: [] };
  const idToNode = { "": root };

  // Create a mapping from ID to the node for directories
  for (const [id, name, parent_id] of directories) {
    const newNode = { name, children: [] };
    idToNode[id] = newNode;

    if (parent_id in idToNode) {
      idToNode[parent_id].children.push(newNode);
    }
  }

  // Add files to their respective directories
  for (const [id, name, parent_id] of files) {
    const newNode = { name, children: [] };

    if (parent_id in idToNode) {
      idToNode[parent_id].children.push(newNode);
    }
  }

  // Helper function to format the directory tree as a string
  function formatTree(node, indent = 0) {
    let result = "   ".repeat(indent) + "|-----" + node.name + "\n";
    for (const child of node.children) {
      result += formatTree(child, indent + 1);
    }
    return result;
  }

  // Generate the directory tree as a string starting from the root
  const directoryTree = formatTree(root);

  return directoryTree;
}

exports.solution = solution;

// Sample input
const files = [
  ["1", "todo list.txt", ""],
  ["2", "diary.txt", "1"],
  ["3", "diary.txt", "2"],
  ["4", "death note.txt", "3"],
];

const directories = [
  ["1", "monday", ""],
  ["2", "tuesday", ""],
  ["3", "secret", "1"],
];

const result = solution(files, directories);
console.log(result);
