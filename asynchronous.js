//Question one
async function acceptMesageWithDelay(message,delayMessage){
    await new Promise((resolve) =>{
setTimeout(resolve,delayMessage)});
console.log(message)
}
acceptMesageWithDelay("hello,world",2000);


//Question two
const getUserData = id => {
    // Simulate async API call
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ id, name: `User ${id}` });
      }, 100);
    });
  };
  const logUserData = async ids => {
    for (const id of ids) {
      const userData = await getUserData(id);
      console.log(userData);
    }
  };
  const userIds = [1, 2, 3];
  logUserData(userIds);

//Question three
async function handleTask(){
    try{
        await performTask();
        console.log("Task completed successfully!");


    }
    catch(error){
        console.log("Error encoutered during task");
    

    }
}

  //Question four
  function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      if ( randomNumber> failureProbability) {
        resolve(`The Task "${taskName}" succeeded`);
      } else {
        reject(new Error(`The Task "${taskName}" failed`));
      }
    });
  }
  async function executeWithRetry(taskName, retries, failureProbability) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        await unstableTask(taskName, failureProbability);
        console.log(`Attempt ${attempt}: Task "${taskName}" succeeded`);
        return;
      } catch (error) {
        console.error(`Attempt ${attempt}: ${error.message}`);
      }
    }
    console.log(`All ${retries} attempts failed for task "${taskName}"`);
  }
  executeWithRetry('Data Processing', 3, 0.3);
  
    
  